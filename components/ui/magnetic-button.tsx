import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setPosition({ x: x * 0.15, y: y * 0.15 });
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovering(false);
  };

  return (
    <motion.div
      className="relative w-fit"
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={reset}
      style={{ x: position.x, y: position.y }}
      transition={isHovering ? { type: "spring", stiffness: 120, damping: 12 } : { duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticButton;
