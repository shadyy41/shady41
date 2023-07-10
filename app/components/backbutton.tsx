"use client";

import { useRouter } from "next/navigation"

const BackButton = () => {
  const router = useRouter()
  return (
    <button className="hover:text-white text-neutral-950 transition-colors w-fit text-sm bg-yellow-500 py-1 px-2 rounded-md" onClick={()=>router.back()}>
      back
    </button>
  )
}

export default BackButton