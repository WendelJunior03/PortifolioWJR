"use client";

import { link } from "fs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";


const links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Services",
        path: "/services"
    },
    {
        name: "Resume",
        path: "/resume"
    },
    {
        name: "Work",
        path: "/work"
    },
    {
        name: "Contact",
        path: "/contact"
    }
]

const Nav = () => {
    const pathname = usePathname();
    // mapeia os links e os renderiza com o nome e o path correspondente a cada link no array links
    return (
        <nav className="flex gap-8">
            
            {links.map((link) => (
                <Link href={link.path} key={link.path} className={`${pathname === link.path && "text-accent border-b border-accent"} capitalize font-medium hover:text-accent transition-all`}> 
                    {link.name}
                </Link>
                // no estilo do link acima foi colocado a propriedade className={`${pathname === link.path && "text-accent border-b border-accent"} capitalize font-medium hover:text-accent transition-all`} para que quando o path do link for igual ao pathname, o link fique com a propriedade text-accent
            ))}
        </nav>
    );
};

export default Nav;