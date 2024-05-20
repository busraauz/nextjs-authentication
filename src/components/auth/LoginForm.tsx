"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { signIn } from 'next-auth/react'
import Image from "next/image"

const LoginForm = () => {
  return (
    <Card className="flex flex-col items-center justify-center p-10 bg-[#181818] text-white gap-20">
      <CardHeader className="flex flex-col items-center gap-5">
        <CardTitle className="flex flex-col items-center gap-1 font-semibold">
          <div className="flex items-center gap-3">
            <Image
              src="/nextjs.svg"
              alt="Next.js Logo"
              width={40}
              height={40}
              priority
            />
            <span>Next.js Authentication</span>
          </div>

          <span>+</span>
          <div className="flex items-center gap-3">
            <Image
              src="/authjs.webp"
              alt="Auth.js"
              width={30}
              height={30}
              priority
            />
            <span>Auth.js</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 w-full">
        <Button onClick={() => signIn('google', { callbackUrl: '/dashboard' })} className="w-full flex gap-3 bg-transparent text-white" variant="outline">
          <Image
            src="/google.svg"
            alt="Google Logo"
            width={20}
            height={20}
            priority
          />
          <span>Login with Google</span>
        </Button>
      </CardContent>
    </Card>
  )
}

export default LoginForm