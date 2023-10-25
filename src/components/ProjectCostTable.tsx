
'use client'
import React, { useState, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProjectFeeService } from '@/service/ProjectFeeService';
import { Toast } from 'primereact/toast';
import { Button } from "@/components/ui/button"
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';
import { InputNumber, InputNumberChangeEvent } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import { Card } from 'primereact/card';
import ProjectFeeForm from './form/ProjectCostForm';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { TableRowActions } from './TableRowAction';
import { AlertTriangle, Check, FileEdit, FileText, Plus, Search, Trash, Trash2, X } from 'lucide-react';


interface Product {
  id: string | null;
  feetype: string;
  objnumber: string;
  objdesc: string;
}

export default function ProjectCostTable(props) {
  let emptyProduct: Product = {
    id: null,
    feetype: '',
    objnumber: '',
    objdesc: '',
  };

  const [products, setProducts] = useState<Product[]>([]);
  const [productDialog, setProductDialog] = useState<boolean>(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState<boolean>(false);
  const [deleteProductsDialog, setDeleteProductsDialog] = useState<boolean>(false);
  const [product, setProduct] = useState<Product>(emptyProduct);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product>(emptyProduct);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useState<string>('');
  const toast = useRef<Toast>(null);
  const dt = useRef<DataTable<Product[]>>(null);
  const router = useRouter();

  useEffect(() => {
    ProjectFeeService.getProducts().then((data) => setProducts(data));
  }, []);

  const formatCurrency = (value: number) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  };

  // const openNew = () => {
  //   setProduct(emptyProduct);
  //   setSubmitted(false);
  //   setProductDialog(true);
  // };

  const hideDialog = () => {
    setSubmitted(false);
    setProductDialog(false);
  };

  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  };

  const hideDeleteProductsDialog = () => {
    setDeleteProductsDialog(false);
  };

  const saveProduct = () => {
    setSubmitted(true);

    if (product.name.trim()) {
      let _products = [...products];
      let _product = { ...product };

      if (product.id) {
        const index = findIndexById(product.id);

        _products[index] = _product;
        toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
      } else {
        _product.id = createId();
        _products.push(_product);
        toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
      }

      setProducts(_products);
      setProductDialog(false);
      setProduct(emptyProduct);
    }
  };

  const editProduct = (product: Product) => {
    setProduct({ ...product });
    setProductDialog(true);
  };

  const 确认DeleteProduct = (product: Product) => {
    setProduct(product);
    setDeleteProductDialog(true);
  };

  const deleteProduct = () => {
    let _products = products.filter((val) => val.id !== product.id);

    setProducts(_products);
    setDeleteProductDialog(false);
    setProduct(emptyProduct);
    toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
  };

  const findIndexById = (id: string) => {
    let index = -1;

    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  };

  const createId = (): string => {
    let id = '';
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return id;
  };

  const exportCSV = () => {
    dt.current?.exportCSV();
  };

  const ConfirmDeleteSelected = () => {
    setDeleteProductsDialog(true);
  };

  const deleteSelectedProducts = () => {
    let _products = products.filter((val) => !selectedProducts.includes(val));

    setProducts(_products);
    setDeleteProductsDialog(false);
    setSelectedProducts([]);
    toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
  };



  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    const val = (e.target && e.target.value) || '';
    let _product = { ...product };

    // @ts-ignore
    _product[`${name}`] = val;

    setProduct(_product);
  };

  const onInputNumberChange = (e: InputNumberChangeEvent, name: string) => {
    const val = e.value || 0;
    let _product = { ...product };

    // @ts-ignore
    _product[`${name}`] = val;

    setProduct(_product);
  };

  const leftToolbarTemplate = () => {
    return (
      <div className="flex ml-4 flex-wrap gap-5">
        <Link href={`/expense-bill/create`}>
          <Button className='bg-white text-lg	p-4 text-green-400 border-1 border-green-400'>
            <Plus /> 新建
          </Button>
        </Link>
        <Button className='bg-white text-lg	p-4 text-red-400 border-1 border-red-400'
          disabled={!selectedProduct}
          onClick={ConfirmDeleteSelected}
        >
          <Trash2 className='pr-1' /> 删除
        </Button>
      </div>
    );
  };

  const rightToolbarTemplate = () => {
    return (
      <div className="flex ml-4 flex-wrap gap-5">
        {/* <Button label="导出" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} /> */}
        {/* <Button label="审批记录" icon="pi pi-file" className="p-button-list" /> */}
        <div className="flex ml-4 flex-wrap gap-5">
          <Link href={`/expense-bill/edit`}>
            <Button className='bg-white text-lg	p-4 text-blue-400 border-1 border-blue-400'
              disabled={!selectedProduct}
            >
              <FileEdit className='pr-1' /> 编辑
            </Button>
          </Link>
          <Link href={`/epproval-records`}>
            <Button className='bg-white text-lg	p-4 text-purple-600 border-1 border-purple-600'
              disabled={!selectedProduct}
              onClick={ConfirmDeleteSelected}
            >
              <FileText className='pr-1' /> 审批记录
            </Button>
          </Link>

        </div>
      </div>
    )
  };

  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
      <h4 className="text-size">搜索</h4>
      <span className="p-input-icon-left">
        <Search strokeWidth={1.25} className='pb-1' />
        <InputText className='w-full' type="search" placeholder="搜索..." onInput={(e) => { const target = e.target as HTMLInputElement; setGlobalFilter(target.value); }} />
      </span>
    </div>
  );
  const deleteProductDialogFooter = (
    <React.Fragment>
      <Button className='bg-white text-lg	p-3 text-red-400 border-1 border-red-400'
        onClick={hideDeleteProductDialog}
      >
        <X /> 否
      </Button>
      <Button className='bg-white text-lg	p-3 text-green-400 border-1 border-green-400'
        onClick={deleteProduct}
      >
        <Check className='pr-1' /> 是
      </Button>
    </React.Fragment>
  );
  const deleteProductsDialogFooter = (
    <React.Fragment>
      <Button className='bg-white text-lg	p-3 text-red-400 border-1 border-red-400'
        onClick={hideDeleteProductsDialog}
      >
        <X /> 否
      </Button>
      <Button className='bg-white text-lg	p-3 text-green-400 border-1 border-green-400'
        onClick={deleteSelectedProducts}
      >
        <Check className='pr-1' /> 是
      </Button>
    </React.Fragment>
  );

  return (
    <Card className='w-full'>
      <Card title="项目费用单" className='grid grid-cols-1 md:flex flex-row'>
        <Toast ref={toast} />
        <Toolbar className="mb-4" start={leftToolbarTemplate} end={rightToolbarTemplate}></Toolbar>
        <div className='mt-2 '>
          <DataTable
            showGridlines
            columnResizeMode='fit'
            className='h-screen overflow-scroll 
            p-datatable-header	p-datatable-footer bg-white'
            ref={dt} value={products} selection={selectedProduct}
            onSelectionChange={(e) => {
              // if (Array.isArray(e.value)) {
              //   setSelectedProducts(e.value);
              // }
              setSelectedProduct(e.value)
            }}
            editMode="row"
            dataKey="id" paginator rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="{first} to {last} of {totalRecords}" globalFilter={globalFilter}
            header={header}>
            <Column selectionMode="single" exportable={false}></Column>
            <Column sortable field="code" header="费用记录类型"
              style={{ width: '10rem', minWidth: '10rem' }} />
            <Column sortable field="name" header="对象号" style={{ minWidth: '4rem' }} />
            <Column sortable field="description" header="对象描述" style={{ minWidth: '4rem' }}></Column>
            <Column sortable field="description" header="所属部门" style={{ minWidth: '4rem' }}></Column>
            <Column sortable field="description" header="书名" style={{ minWidth: '4rem' }}></Column>
            <Column sortable field="description" header="物料号" style={{ minWidth: '4rem' }}></Column>
            <Column sortable field="description" header="策划编辑" style={{ minWidth: '4rem' }}></Column>
            {/* <Column header="操作" body={(rowData) => (
              <TableRowActions row={rowData} />
            )} style={{ width: '6rem' }} /> */}
          </DataTable>
        </div>
      </Card>

      <Dialog visible={deleteProductDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="确认" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
        <div className="确认ation-content">
          <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
          {product && (
            <span>
              Are you sure you want to delete <b>{product.id}</b>?
            </span>
          )}
        </div>
      </Dialog>

      <Dialog
        visible={deleteProductsDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="确认" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
        <div className="confirmation-content flex items-center">
          <AlertTriangle strokeWidth={1.25} className='mr-2' />
          {product && <span>确定要删除所有选中项吗?</span>}
        </div>
      </Dialog>
    </Card>
  );
}
