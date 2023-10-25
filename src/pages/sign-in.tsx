import SignInForm from '@/components/form/SignInForm'
import AuthLayout from '@/layouts/AuthLayout'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='w-full'>
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </div>
  )
}


export default SignInPage
