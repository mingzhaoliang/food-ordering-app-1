import Link from "next/link";


export default function NavigationList({ isActive, isMenuOpen }: { isActive: boolean, isMenuOpen?: boolean }) {


    return (
        <>
            <Link href="/" draggable={false}>Home</Link>
            <Link href="/menu" draggable={false}>Menu</Link>
            <Link href="/about" draggable={false}>About</Link>
            <Link href="/contact" draggable={false}>Contact</Link>
            <Link href="/order" draggable={false}>Order Now</Link>
        </>
    )
}