export default function Header() {

  return (
    <header className="flex justify-between items-center uppercase ">
      <h1 className="text-2xl font-blod">Viagem</h1>

      <nav className="flex gap-6">
        <a>home</a>
        <a>about us</a>
        <a>destination</a>
        <a>blog</a>
      </nav>

      <div className="flex gap-4">
        <button className="uppercase">login</button>
        <button className="uppercase py-1 px-4 bg-heavy-metal-500 text-zinc-50 rounded-full border border-zinc-50 shadow-md">sing up</button>
      </div>
    </header>
  )
}