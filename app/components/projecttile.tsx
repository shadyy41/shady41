import Link from "next/link"

interface Props{
  name: string,
  description: string,
  classes: string
}

const ProjectTile = ( { name, description, classes } : Props ) => {
  return (
    <Link href={`project/${name}`} className={`shadow-[5px_5px_0px_0px_#5050507a] hover:shadow-[7px_7px_0px_0px_#5050507a] transition-shadow p-2 rounded-md ${ classes } text-neutral-900 flex flex-col justify-between gap-3`}>
      <div>
        <h3 className="text-xl font-semibold">{ name }</h3>
        <p className="text-lg">{ description }</p>
      </div>
      <p className="text-sm underline decoration-2">View details</p>
    </Link>
  )
}

export default ProjectTile