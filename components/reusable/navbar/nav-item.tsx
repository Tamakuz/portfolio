import MagneticButton from "@/components/ui/magnetic-button";
import { motion } from "framer-motion";

const navigations = [
  {
    name: "Home",
    href: "home",
  },
  {
    name: "About",
    href: "about",
  },
  {
    name: "Projects",
    href: "projects",
  },
  {
    name: "Contact",
    href: "contact",
  },
];

const NavItem = ({ active }: { active: boolean }) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ul className="my-3">
      {navigations.map(({ name, href }, index) => (
        <motion.li
          key={index}
          initial={{ scale: 0 }}
          animate={{ scale: active ? 1 : 0 }}
          transition={{
            duration: 0.4 + index * 0.1,
            delay: index * 0.1,
            ease: "easeInOut",
          }}
          className="cursor-pointer mb-2 font-semibold text-neutral-100 dark:text-neutral-700"
          onClick={() => scrollToSection(href)}
        >
          <MagneticButton>
            {name}
          </MagneticButton>
        </motion.li>
      ))}
    </ul>
  );
};

export default NavItem;
