import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import styles from './ItemLink.module.css'

interface ItemLinkProps {
    link: string
    title: string
}

export function ItemLink({ link, title }: ItemLinkProps) {
    return(
        <NavLink to={link}>
            {({ isActive }) => (
                <div>
                    {title}
                {isActive ? (
                    <motion.div className={styles.tabSelect} layoutId="navLink"/> 
                ) : null}
                </div>
            )}
        </NavLink>
    )
}