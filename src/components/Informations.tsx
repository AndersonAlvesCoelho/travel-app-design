import { BookmarkIcon, InfoIcon, MapPinIcon } from "lucide-react";
import Info from "./Cards/Info";

export default function Informations() {

  return (
    <section className="flex justify-end gap-6 mt-8">
      <Info />
      <div className="flex flex-col items-end  gap-6 ">
        <div className="border border-zinc-50 bg-heavy-metal-500/60 rounded-full p-3">
          <InfoIcon className="h-8 w-8 font-light" />
        </div>
        <div className="border border-zinc-50 bg-heavy-metal-500/60 rounded-full p-3">
          <BookmarkIcon className="h-8 w-8 font-light" />
        </div>
        <div className="border border-zinc-50 bg-heavy-metal-500/60 rounded-full p-3">
          <MapPinIcon className="h-8 w-8 font-light" />
        </div>
      </div>
    </section>
  )
}