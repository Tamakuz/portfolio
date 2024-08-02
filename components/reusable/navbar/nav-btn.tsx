import MagneticButton from "@/components/ui/magnetic-button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { BsList } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa6";

interface NavBtnProps {
  active: boolean;
  toggleHamburger: (status: boolean) => void;
}

const NavBtn = ({ active, toggleHamburger }: NavBtnProps) => {
  return (
    <motion.div
      initial={{ x: "500px" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.5, duration: 1, ease: "backInOut" }}
      className="pointer-events-auto absolute right-[2.5%] top-10 md:top-4 z-50"
    >
      <button tabIndex={0} onClick={() => toggleHamburger(!active)}>
        <div
          className={cn(
            "relative flex h-[40px] w-[40px] items-center justify-center rounded-full bg-zinc-800 shadow-md ring-0 ring-opacity-30 transition-all duration-200 hover:ring-4 dark:bg-zinc-200",
            { "ring-4": active }
          )}
        >
          <motion.div
            initial={{ scale: 1, display: "block" }}
            animate={{
              scale: active ? 0 : 1,
              display: active ? "none" : "block",
            }}
            transition={{ duration: 0.2, ease: "backInOut" }}
          >
            <BsList className="dark:text-zinc-800 text-zinc-200" />
          </motion.div>
          <motion.div
            initial={{ scale: 0, display: "none" }}
            animate={{
              scale: active ? 1 : 0,
              display: active ? "block" : "none",
            }}
            transition={{ duration: 0.2, ease: "backInOut" }}
          >
            <FaArrowUp className="dark:text-zinc-800 text-zinc-200 rotate-90" />
          </motion.div>
        </div>
      </button>
    </motion.div>
  );
};

export default NavBtn;
