import { projects } from "@/app/page"
import Image from "next/image"
import BackButton from "@/app/components/backbutton"
import { redirect } from "next/navigation"

export function generateStaticParams() {
  const list : Array<{ name: string }> = []

  for(let project in projects){
    list.push({ name: project })
  }

  return list
}

const Page = ({ params }: { params: { name: string } }) => {
  const project = projects.get(params.name)
  if(!project) return redirect("/")

  return (
    <main className="w-full text-zinc-300 flex flex-col items-center gap-5 mb-6">
      <div className="w-full p-4 sm:px-0 max-w-2xl flex flex-col gap-6">
        <BackButton/>
        <div className="w-full max-w-2xl flex flex-col">
          <h1>
            <a href={project.url} className="hover:text-white transition-colors w-fit font-semibold text-2xl"  target="_blank" rel="noopener noreferrer">{project.name}</a>
          </h1>
          <div className="flex gap-2 text-sm">
            { project.gh && <a className="hover:text-white transition-colors w-fit underline decoration-purple-600 decoration-2" target="_blank" rel="noopener noreferrer" href={ project.gh }>Repo</a> }
            <a className="hover:text-white transition-colors w-fit underline decoration-purple-600 decoration-2" target="_blank" rel="noopener noreferrer" href={ project.gh }>Live Link</a>
          </div>
        </div>
        <div className="shadow-[5px_5px_0px_0px_#db2877] w-full flex flex-col items-center justify-center border border-white border-opacity-10 rounded overflow-hidden">
          <div className="w-full border-b border-white border-opacity-10 h-5 sm:h-8 bg-black flex items-center justify-center relative">
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 p-2 absolute left-0">
              <span className="h-2 sm:h-3 w-2 sm:w-3 bg-[#ff5f56] rounded-full"></span>
              <span className="h-2 sm:h-3 w-2 sm:w-3 bg-[#ffbd2e] rounded-full"></span>
              <span className="h-2 sm:h-3 w-2 sm:w-3 bg-[#27c93f] rounded-full"></span>
            </div>
            <div className="h-full w-full max-w-[260px] p-1 relative hidden sm:block">
              <a href={ project.url } className="w-full h-full bg-green-600 rounded bg-opacity-10 text-green-500 text-opacity-90 flex items-center justify-center text-xs" target="_blank" rel="noopener noreferrer">
                <p>{ project.url }</p>
              </a>
            </div>
          </div>
          <div className="w-full aspect-[16/10] flex-shrink-0 flex bg-neutral-950 relative">
            <Image src={ project.banner } alt="banner image" placeholder="blur" fill={true}/>
          </div>
        </div>
        <div className="w-full max-w-2xl flex flex-col">
          <h2 className="font-semibold items-center flex gap-1 text-2xl"><span className="text-pink-600">#</span>Description</h2>
          <p className="text-lg">
            { project.description }
          </p>
        </div>
        <div className="w-full max-w-2xl flex flex-col">
          <h2 className="font-semibold items-center flex gap-1 text-2xl"><span className="text-pink-600">#</span>Tech Stack</h2>
          <ul className="list-disc list-inside">
            { project.tech.map((e, idx)=>{
              return <li key={ idx }>
                <a className="hover:text-white transition-colors w-fit text-lg" target="_blank" rel="noopener noreferrer" href={ e.url }>{ e.name }</a>
              </li>
            }) }
          </ul>
        </div>
      </div>
    </main>
  )
}

export default Page