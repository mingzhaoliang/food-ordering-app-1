import Link from "next/link";

export default function MainNavigation() {
  return (
    <div className="max-md:hidden px-6 py-6 mx-auto flex justify-between items-center text-white">
      <Link
        href="/"
        className="text-3xl lg:text-4xl font-black tracking-wider font-Pattaya transition-all"
      >
        Cucina Felice
      </Link>
      <div className="flex gap-[1.5rem] justify-around items-center text-[1.06rem] lg:text-lg lg:gap-6 xl:gap-8 transition-all">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <button className="">Log in</button>
      </div>
    </div>
  )
}