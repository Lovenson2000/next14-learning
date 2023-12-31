"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./Navlink";


function Links() {
    const [open, setOpen] = useState(false);
    const links = [

        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "blog",
            path: "/blog",
        },
    ];
    const session = true;
    const isAdmin = true;
    return (
        <div className={styles.container}>
            <div className={styles.links}>
            {links.map((link) => (
                <NavLink item={link} key={link.title} />
            ))} 
            {session ? (
                <>
                
                    {isAdmin && <NavLink item={{title: "Admin", path: "/admin"}} />
                 
                    }
                    <button className={styles.logout}>Logout</button>
                </>

                ) : (
                    <NavLink item={{title: "Login", path: "/login"}} />
                )
            }
        </div>
        <Image
            width={27}
            height={26}
            src="/menu-2.png"
            alt=""
            className={styles.menuButton}
            onClick={() => setOpen(prev => !prev)}>      
        </Image>
        {open && (
            <div className={styles.mobileLinks}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}
            </div>
        )}
        </div>
    );
}

export default Links;