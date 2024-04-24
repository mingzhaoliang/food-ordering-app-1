import Link from "next/link";

export default function NavigationList({ closeMenu }: { closeMenu?: () => void }) {
    return (
        <>
            <Link href="/" draggable={false} onClick={closeMenu}>
                Home
            </Link>
            <Link href="/menu/antipasti" draggable={false} onClick={closeMenu}>
                Menu
            </Link>
            <Link href="/about" draggable={false} onClick={closeMenu}>
                About
            </Link>
            <Link href="/contact" draggable={false} onClick={closeMenu}>
                Contact
            </Link>
        </>
    );
}
