import Link from "next/link"

import breeze from "../public/breeze.png"
import snippetShare from "../public/snippetshare.png"
import ticTacToe from "../public/tictactoe.png"
import codeShack from "../public/codeshack.png"
import ProjectTile from "./components/projecttile"

export type Project = {
  name: string,
  description: string,
  banner: any,
  url: string,
  gh?: string,
  tech: Array<{name: string, url: string}>,
  short_desc: string
}

const projects : Map<string, Project> = new Map([
  ["CodeShack", {
    name: 'CodeShack',
    description: "CodeShack is a realtime collaborative coding web application with additional features such as video calls, text chat, online code compilation.",
    banner: codeShack,
    url: 'https://codeshack.vercel.app',
    gh: 'https://github.com/shadyy41/codeshack',
    tech: [{
      name: "Next.js",
      url: "https://nextjs.org/"
    }, {
      name: "Trystero",
      url: "https://oxism.com/trystero/"
    }, {
      name: "Yjs",
      url: "https://docs.yjs.dev/"
    }, {
      name: "Zustand",
      url: "https://github.com/pmndrs/zustand"
    } ],
    short_desc: "Collaborative coding web app built with Nextjs 13, Tailwind, VercelKV and MongoDB."
  }],
  ["Breeze", {
    name: 'Breeze',
    description: 'Breeze is a music player app similar to Spotify Web, users can perform CRUD operations on playlists, perform a regex based search for songs and artists.',
    banner: breeze,
    url: 'https://breeze41.vercel.app',
    gh: 'https://github.com/shadyy41/Breeze',
    tech: [{
      name: "Next.js",
      url: "https://nextjs.org/"
    }, {
      name: "MongoDB",
      url: "https://www.mongodb.com/"
    }, {
      name: "NextAuth.js",
      url: "https://next-auth.js.org/"
    }, ],
    short_desc: "Online music player built with Nextjs and Bulma."
  }],
  ["TicTacToe", {
    name: 'TicTacToe',
    description: 'Online TicTacToe app which supports Auth using JWT. Users can start a game with other users using their email ids. Finished games are stored in MongoDB database.',
    banner: ticTacToe,
    url: 'https://tictactoe41.vercel.app',
    gh: 'https://github.com/shadyy41/tic-tac-toe',
    tech: [{
      name: "Next.js",
      url: "https://nextjs.org/"
    }, {
      name: "Socket.IO",
      url: "https://socket.io/"
    }, {
      name: "Express.js",
      url: "https://expressjs.com/"
    }, {
      name: "MongoDB",
      url: "https://www.mongodb.com/"
    }, ],
    short_desc: "P2P TicTacToe app built with Nextjs, Tailwind, Express and MongoDB."
  }],
  ["SnippetShare", {
    name: 'SnippetShare',
    description: 'SnippetShare is a web app that allows users to create, save, share code snippets. The code editor supports 6 languages.',
    banner: snippetShare,
    url: 'https://snippetshare41.cyclic.app/explore',
    tech: [{
      name: "Express.js",
      url: "https://expressjs.com/"
    }, {
      name: "MongoDB",
      url: "https://www.mongodb.com/"
    }, {
      name: "Bulma",
      url: "https://bulma.io/"
    }, ],
    short_desc: "Basic CRUD application built with Express and MongoDB."
  }]
])

export { projects }

const classes_array = ["bg-rose-600", "bg-green-500", "bg-purple-600", "bg-yellow-500"]

export default function Home() {
  return (
    <main className="w-full text-zinc-300 flex flex-col items-center gap-5 mb-6">
      <header className="w-full flex justify-between items-center pt-4 px-4 sm:px-0 max-w-2xl text-sm">
        <div className="font-medium">
          Abhinav Jha
        </div>
        <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
      </header>
      <div className="w-full px-4 sm:px-0 max-w-2xl flex flex-col gap-2">
        <h2 className="font-semibold items-center flex gap-1 text-2xl"><span className="text-pink-600">#</span>About</h2>
        <p className="text-lg text-neutral-950 shadow-[5px_5px_0px_0px_#5050507a] p-2 bg-blue-600 rounded-md">I am a fullstack web developer and an engineering undergrad at NSUT, Delhi. I like building web apps with Nextjs and Tailwind, currently I am learning Rust and tRPC.</p>
      </div>
      <div className="w-full px-4 sm:px-0 max-w-2xl flex flex-col gap-2">
        <h2 className="font-semibold items-center flex gap-1 text-2xl"><span className="text-pink-600">#</span>Projects</h2>
        <div className="w-full grid grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 gap-4">
          { Array.from( projects ).map(([key, e], idx)=><ProjectTile key={key} name={e.name} description={ e.short_desc } classes={classes_array[idx]}/>) }
        </div>
      </div>
      <div className="w-full px-4 sm:px-0 max-w-2xl flex flex-col gap-2">
        <h2 className="font-semibold items-center flex gap-1 text-2xl"><span className="text-pink-600">#</span>Contact</h2>
        <div className="flex flex-col gap-1 text-lg text-neutral-950 shadow-[5px_5px_0px_0px_#5050507a] p-2 bg-teal-500 rounded-md">
          <a className="hover:text-white transition-colors w-fit" href="https://www.linkedin.com/in/abhinavanand41/" target="_blank" rel="noopener noreferrer">Linkedin</a>
          <a className="hover:text-white transition-colors w-fit" href="https://github.com/shadyy41" target="_blank" rel="noopener noreferrer">Github</a>
          <a className="hover:text-white transition-colors w-fit" href="mailto:abhinavjha2512@gmail.com" target="_blank" rel="noopener noreferrer">abhinavjha2512@gmail.com</a>
        </div>
      </div>
    </main>
  )
}
