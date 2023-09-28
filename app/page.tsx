'use client'

import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
      <h1>Staff Navigator</h1>
      <h1>Please Login</h1>
      <a href="/login">
      <Button>Login</Button>
      </a>
      
    </div>
  )
}
