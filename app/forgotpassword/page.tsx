'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginAccount() {
    const handleSigninButton = () => {
    window.location.href = "/login"
    }

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
      <div className="w-full m-auto bg-white lg:max-w-lg">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Forgot Password</CardTitle>
            <CardDescription className="text-center">
              Enter your email to reset your password
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full">Login</Button>
            <a href="/login">
              <p className="mt-2 text-xs text-center text-gray-700">
              {" "}
              Suddenly remember your password?{" "}
              <span className=" text-blue-600 hover:underline">Sign In</span>
              </p>
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}