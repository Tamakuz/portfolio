import { motion } from "framer-motion";
import Link from "next/link";

const navigations = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const NavItem = ({ active }: { active: boolean }) => {
  return (
    <ul className="my-3">
      {navigations.map(({ name, href }, index) => (
        <motion.li
          key={index}
          initial={{ scale: 0 }}
          animate={{ scale: active ? 1 : 0 }}
          transition={{ duration: 0.4 + index * 0.1, delay: index * 0.1, ease: "easeInOut" }}
          className="cursor-pointer mb-2 font-semibold text-neutral-100 dark:text-neutral-700"
        >
          <Link href={href}>{name}</Link>
        </motion.li>
      ))}
    </ul>
  );
};

export default NavItem;