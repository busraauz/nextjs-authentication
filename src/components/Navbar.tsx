"use client"
import Link from "next/link";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

const Navbar = () => {
  return (
    <div className="text-white w-full sticky top-0 flex h-16 items-center justify-between gap-4 border-b border-b-[#27272a] bg-black px-4 md:px-6">

      <Link className="text-xl" href="/">Dashboard</Link>
      <Button className="" onClick={() => signOut()}>Logout</Button>
    </div>
  )
}

export default Navbar