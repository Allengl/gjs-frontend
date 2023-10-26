'use client'
import React from 'react'
import ExpenseBillFrom from '@/components/form/ExpenseBillForm'
import { Card } from 'primereact/card'

const ExpenseBillCreatePage = () => {
  return (
    <Card title="编辑项目费用单" className='w-full p-6'>
      <ExpenseBillFrom type='edit' />
    </Card>
  )
}

export default ExpenseBillCreatePage
