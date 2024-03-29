import Link from "next/link";
import NavigationList from "./navigation-list";
import SignIn from "./sign-in";

export default function MainNavigation({ isActive }: { isActive: boolean }) {
  return (
    <div
      className="max-md:hidden px-6 py-4 lg:px-8 xl:px-10 mx-auto flex justify-between items-center"
      style={{
        backgroundColor: isActive ? "hsla(0, 0%, 100%, 0.9)" : "transparent",
        backdropFilter: isActive ? "blur(4px)" : "none",
        boxShadow: isActive ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
        color: isActive ? "#1e293b" : "#ffffff",
        transition: "all 0.25s ease-in-out",
      }}
    >
      <Link
        href="/"
        draggable={false}
        className="text-3xl lg:text-4xl xl:text-5xl font-black tracking-wider font-cursive"
      >
        Cucina Felice
      </Link>
      <div className="font-lato flex gap-3 justify-around items-center text-[1.06rem] lg:text-lg lg:gap-6 xl:gap-8">
        <NavigationList />
        <SignIn isActive={isActive} />
      </div>
    </div>
  )
}