'use client'
import React from 'react'
import ExpenseBillFrom from '@/components/form/ExpenseBillForm'
import { Card } from 'primereact/card'
import { Toolbar } from 'primereact/toolbar'
import { Steps } from 'primereact/steps'
import { MenuItem } from 'primereact/menuitem'

const ApprovalRecordsPage = () => {

  const items: MenuItem[] = [
    {
      label: '已提交',
      style: { width: '25%' }
    },
    {
      label: '审批中',
      style: { width: '25%' }
    },
    {
      label: '已审批',
      style: { width: '25%' }
    },
    {
      label: '已完成',
      style: { width: '25%' }

    }
  ];

  return (
    <Card title="审批记录" className='w-full p-6'>
      <div className='w-full bg-toolbar-bg	p-4 pt-6  mb-4 border-1 rounded-lg'>
        <Steps model={items} activeIndex={1} />
      </div>
      <ExpenseBillFrom type="view" />
    </Card>
  )
}

export default ApprovalRecordsPage
