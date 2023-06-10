"use client"

import { usePathname } from "next/navigation";
import Link  from 'next/link';

function NavLink({ href, children, ...props }:any) {
    console.log(">>>> props", props);
    
    const pathname:string =usePathname();
    console.log(Link);
    
    // const isActive = pathname === href : pathname.startsWith(href);

    // if (isActive) {
    //     props.className += ' active';
    // }

    return (
        <Link href="/">
            <span {...props}>
                {children}
            </span>
        </Link>
    );
}

export default NavLink