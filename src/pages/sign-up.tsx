import SignUpForm from '@/components/form/SignUpForm'
import AuthLayout from '@/layouts/AuthLayout'
import React from 'react'
 const SignUpPage = () => {
  return (
    <div className='w-full'>
      <AuthLayout>
        <SignUpForm />
      </AuthLayout>
    </div>
  )
}
export default SignUpPage
