"use client";

import { useRouter } from "next/navigation"

const BackButton = () => {
  const router = useRouter()
  return (
    <button className="hover:text-white transition-colors w-fit text-sm" onClick={()=>router.back()}>
      back
    </button>
  )
}

export default BackButton