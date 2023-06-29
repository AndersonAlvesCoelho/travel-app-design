import { ChevronRightIcon, GlobeIcon, SunIcon, UserIcon } from "lucide-react";

export default function Info() {

  return (
    <div className="px-4 py-8 flex flex-col rounded-3xl gap-6 text-zinc-50 bg-heavy-metal-500/60 w-80 text-sm">
      <div className="flex items-center justify-between gap-6 ">
        <GlobeIcon className="h-6 w-6 flex-1 " />
        <p className="w-3/4">With a total area of 1,8M sq, km. Queensland is an expansive state with diverse range of climates and geographicaf fetures.</p>
      </div>
      <div className="flex items-center justify-between gap-6 ">
        <SunIcon className="h-6 w-6 flex-1 " />
        <p className="w-3/4">With a total area of 1,8M sq, km. Queensland is an expansive state.</p>
      </div>
      <div className="flex items-center justify-between gap-6 ">
        <UserIcon className="h-6 w-6 flex-1 " />
        <p className="w-3/4">A certificação de metodologias que nos auxiliam.</p>
      </div>

      <a className="inline-flex gap-4 items-center justify-end underline">
        Lear more
        <ChevronRightIcon className="h-4 w-4 text-zinc-50 rounded-full border border-zinc-50 " />
      </a>
    </div>
  )
}