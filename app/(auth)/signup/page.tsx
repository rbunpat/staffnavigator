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
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
      <div className="w-full m-auto bg-white lg:max-w-lg">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Sign Up</CardTitle>
            <CardDescription className="text-center">
              Enter your email and password to sign up
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Confirm your password</Label>
              <Input id="confirmPassword" type="password" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full">Login</Button>
            <a href="/login">
              <p className="mt-2 text-xs text-center text-gray-700">
                {" "}
                Have an account?{" "}
                <span className=" text-blue-600 hover:underline">Log In</span>
              </p>
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}