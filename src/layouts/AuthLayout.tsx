'use client'
import { FC } from "react"
import Image from "next/image"
import login from "@/assets/login.jpg"

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100
    ">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center p-6 md:p-14">
          <span className="mb-3 text-4xl font-bold">Welcome back</span>
          <span className="font-light text-gray-400 mb-4">
            Welcom back! Please enter your details
          </span>
          {children}
        </div>
        <div className="relative">
          <Image
            src={login}
            alt="img"
            width={400}
            height={600}
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
          {/* <!-- text on image  --> */}
          <div
            className="absolute hidden bottom-10 right-6 p-6 bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
          >
            <span className="text-white text-xl "
            >&quot;阅读使人充实，交谈使人机智，写作使人精确。因为阅读是一种思考，思考是一种阅读。&quot; —— 弗朗西斯·培根

            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
