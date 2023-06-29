import { Header, Informations, Slider } from "@/components";

export default function Home() {


  return (
    <main className="font-body text-zinc-50">
      <div className="flex flex-col h-screen">

        <img className="absolute -z-10 w-screen h-screen right-0 top-0 zoom full" src="/images/florest.jpg" />

        <div className="flex-1 backdrop-blur-sm h-auto"></div>
        <div className="flex flex-auto justify-center ">
          <div className="flex-1 backdrop-blur-sm"></div>
          <div className="bg-transparent  w-5/6 border-4 border-zinc-50 px-20 py-8">
            <Header />

            <Informations />

            <Slider />
          </div>
          <div className="flex-1 backdrop-blur-sm"></div>
        </div >
        <div className="flex-1 backdrop-blur-sm h-auto"></div>
      </div>
    </main>
  )

}
