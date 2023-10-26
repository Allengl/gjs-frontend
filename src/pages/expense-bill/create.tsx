'use client'
import React from 'react'
import ExpenseBillForm from '@/components/form/ExpenseBillForm'
import { Card } from 'primereact/card'

const ExpenseBillCreatePage = () => {
  return (
    <Card title="新建项目费用单" className='w-full p-6'>
      <ExpenseBillForm type="new" />
    </Card>
  )
}

export default ExpenseBillCreatePage
