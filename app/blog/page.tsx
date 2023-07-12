import BackButton from "@/app/components/backbutton"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "blog"
}

const Page = () => {
  return (
    <main className="w-full text-zinc-300 flex flex-col items-center gap-4 p-4 pb-6">
      <div className="w-full max-w-2xl flex flex-col gap-6">
        <BackButton/>
        <div className="w-full max-w-2xl flex flex-col">
          <h1 className="w-fit font-semibold text-2xl">
            Blog
          </h1>
          <p className="text-lg">
            Will add later.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Page