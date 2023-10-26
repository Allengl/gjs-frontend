'use client'
import { Form } from "@/components/ui/form"
import { Panel } from 'primereact/panel';
import { useForm } from "react-hook-form"
import { z } from "zod"

import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from 'primereact/button';
import React, { FC, useRef, useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { FileUpload } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar'
import { Check, LayoutList, Plus, Save, ShoppingCart, TextSelect, Trash2, X } from 'lucide-react'
import { DialogComponent } from "../DialogComponent";
import { Card } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import Image from "next/image";
import { ReusableForm } from "./ReusableForm";
import { type } from "os";

const formSchema = z
  .object({
    username: z.string()
      .min(1, 'Username is required')
      .max(100),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Password confirmation is required")
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

interface ExpenseBillFromProps {
  type?: 'new' | 'edit' | 'view'
}

const ExpenseBillFrom: FC<ExpenseBillFromProps> = ({ type }) => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "q11111",
      email: "",
      password: "",
      confirmPassword: ""
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {

    const response = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({

        username: values.username,
        email: values.email,
        password: values.password
      })
    })
  }

  return (
    <Card className="m-0 h-screen overflow-scroll w-full flex mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <div className='space-y-5'>
            <Panel header="项目信息">
              <div className="grid grid-cols-4 grid-rows-6 gap-3">
                <div className="col-span-2">
                  <ReusableForm disable={true} form={form} name='username' label='凭证编号：' placeholder='' />
                </div>
                <div className="row-start-2">
                  <ReusableForm disable={true} form={form} name='' label='WBS元素：' placeholder='' />
                </div>
                <div className="col-span-3 row-start-2">
                  <div className="flex">
                    <div className="flex-grow">
                      <ReusableForm disable={true} form={form} name='' label='' placeholder='' />
                    </div>
                    <div className='mt-4'>
                      <DialogComponent title="WBS元素">
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                              Name
                            </Label>
                            <Input id="name" value="Pedro Duarte" className="col-span-3" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                              Username
                            </Label>
                            <Input id="username" value="@peduarte" className="col-span-3" />
                          </div>
                        </div>
                      </DialogComponent>
                    </div>
                  </div>
                </div>
                <div className="row-start-3">
                  <ReusableForm disable={true} form={form} name='' label='物料号：' placeholder='' />
                </div>
                <div className="col-span-1 row-start-3">
                  <ReusableForm disable={true} form={form} name='' label='所属部门：' placeholder='' />
                </div>
                <div className="col-span-2 row-start-3">
                  <ReusableForm disable={true} form={form} name='' label='' placeholder='' />
                </div>
                <div className="col-span-4 row-start-4">
                  <ReusableForm disable={true} form={form} name='' label='书名：' placeholder='' />
                </div>
                <div className="col-span-3 row-start-5">
                  <ReusableForm disable={true} form={form} name='' label='著译者：' placeholder='' />
                </div>
                <div className="col-start-4 row-start-5">
                  <ReusableForm disable={true} form={form} name='' label='策划编辑：' placeholder='' />
                </div>
                <div className="row-start-6">
                  <ReusableForm disable={true} form={form} name='' label='创建人：' placeholder='' />
                </div>
                <div className="row-start-6">
                  <ReusableForm disable={true} form={form} name='' label='创建日期：' placeholder='' />
                </div>
                <div className="row-start-6">
                  <ReusableForm disable={true} form={form} name='' label='最后修改人：' placeholder='' />
                </div>
                <div className="row-start-6">
                  <ReusableForm disable={true} form={form} name='' label='最后修改日期：' placeholder='' />
                </div>
              </div>
            </Panel>
            <Panel className='hidden' header="费用计入">
              <div className="grid grid-cols-3 grid-rows-3 gap-4">
                <div >
                  <ReusableForm disable={true} form={form} name='' label='内部订单：' placeholder='' />
                </div>
                <div className="col-span-2">
                  <ReusableForm disable={true} form={form} name='' label='' placeholder='' />
                </div>
                <div className="row-start-2">
                  <ReusableForm disable={true} form={form} name='' label='费用开支范围：' placeholder='' />
                </div>
                <div className="row-start-3">
                  <ReusableForm disable={true} form={form} name='' label='公司代码：' placeholder='' />
                </div>
                <div className="row-start-3">
                  <ReusableForm disable={true} form={form} name='' label='申请人编号：' placeholder='' />
                </div>
                <div className="row-start-3">
                  <ReusableForm disable={true} form={form} name='' label='管理员：' placeholder='' />
                </div>
              </div>
            </Panel>
            <Panel header="费用计入">
              <div className="grid grid-cols-3 grid-rows-2 gap-4">
                <div >
                  <ReusableForm disable={true} form={form} name='' label='WBS元素：' placeholder='' />
                </div>
                <div className="col-span-2">
                  <div className="flex">
                    <div className="flex-grow">
                      <ReusableForm disable={true} form={form} name='' label='' placeholder='' />
                    </div>
                    <div className='mt-4'>
                      <DialogComponent title="WBS元素">
                        <Card>
                          <div>11111</div>
                        </Card>
                      </DialogComponent>
                    </div>
                  </div>
                </div>
                <div className="row-start-2">
                  <ReusableForm disable={true} form={form} name='' label='公司代码：' placeholder='' />
                </div>
                <div className="row-start-2">
                  <ReusableForm disable={true} form={form} name='' label='申请人编号：' placeholder='' />
                </div>
                <div className="row-start-2">
                  <div className="flex">
                    <div className="flex-grow">
                      <ReusableForm disable={true} form={form} name='' label='管理员：' placeholder='' />
                    </div>
                    <div className='mt-4'>
                      <DialogComponent title="WBS元素">
                        <Card>
                          <div>11111</div>
                        </Card>
                      </DialogComponent>
                    </div>
                  </div>
                </div>
              </div>
            </Panel>
            {type === "view" ? (
              <Panel header="审批意见">
                <div>
                  <Textarea placeholder="请填写审批意见." />
                </div>
              </Panel>
            ) : null
            }
            <div className="flex ml-4 justify-space gap-5">
              {type === "new" || type === "edit" ? (
                <>
                  <Button className='bg-white text-lg p-2 px-3 text-purple-400 border-1 border-purple-400'>
                    <Save /> 保存
                  </Button>
                  <Button className='bg-white text-lg p-2 px-3 text-green-400 border-1 border-green-400'>
                    <Check /> 提交
                  </Button>
                </>
              ) : type === "view" ? (
                <>
                  <Button className='bg-white text-lg p-2 px-3 text-green-400 border-1 border-green-400'>
                    <Check /> 同意
                  </Button>
                  <Button className='bg-white text-lg p-2 px-3 text-red-400 border-1 border-red-400'>
                    <X className='pr-1' /> 驳回
                  </Button>
                </>
              ) : null}
            </div>
          </div>
        </form>
      </Form>
    </Card>
  )
}

export default ExpenseBillFrom
