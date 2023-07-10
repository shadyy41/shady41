"use client";

import { useRouter } from "next/navigation"

const BackButton = () => {
  const router = useRouter()
  return (
    <button className="hover:text-white transition-colors w-fit text-xs" onClick={()=>router.back()}>
      &larr; back
    </button>
  )
}

export default BackButton