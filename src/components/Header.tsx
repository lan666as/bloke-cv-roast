'use client'

import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc"

export function Header() {
  return (
    <header className="w-full p-4 bg-white border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">CV Roast</h1>
        <Button 
          variant="outline" 
          onClick={() => console.log("Google login clicked")}
          className="hidden sm:flex items-center text-gray-800 border-gray-300 hover:bg-gray-100"
        >
          <FcGoogle className="mr-2 h-4 w-4" />
          Sign in with Google
        </Button>
        <Button 
          variant="outline" 
          onClick={() => console.log("Google login clicked")}
          className="sm:hidden text-gray-800 border-gray-300 hover:bg-gray-100"
          size="icon"
        >
          <FcGoogle className="h-4 w-4" />
        </Button>
      </div>
    </header>
  )
}