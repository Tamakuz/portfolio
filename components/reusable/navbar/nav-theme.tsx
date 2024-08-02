'use client';

import { Dock, DockIcon } from '@/components/magicui/dock';
import React from 'react';
import { FaSun, FaMoon, FaDesktop } from 'react-icons/fa';
import { useTheme } from 'next-themes';

const NavTheme = () => {
  const { setTheme } = useTheme();

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <div className="relative">
      <Dock direction="middle">
        <DockIcon>
          <FaSun
            onClick={() => handleThemeChange("light")}
            className="size-6"
            title="Light Mode"
          />
        </DockIcon>
        <DockIcon>
          <FaMoon
            onClick={() => handleThemeChange("dark")}
            className="size-6"
            title="Dark Mode"
          />
        </DockIcon>
        <DockIcon>
          <FaDesktop
            onClick={() => handleThemeChange("system")}
            className="size-6"
            title="System Mode"
          />
        </DockIcon>
      </Dock>
    </div>
  );
}

export default NavTheme