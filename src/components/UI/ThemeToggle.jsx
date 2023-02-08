import { motion } from 'framer-motion';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function ThemeToggle(props) {
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);

  const toggleThemeHandler = () => {
    setIsDarkModeActive(prev => !prev);
    document.documentElement.classList.toggle('dark');
  };

  const MotionMoonIcon = motion(MoonIcon);
  const MotionSunIcon = motion(SunIcon);

  const iconsMotionConfig = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 },
    transition: { duration: 0.2 },
  };

  const buttonMotionConfig = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
    transition: { duration: 0.2 },
  };

  return (
    <motion.button
      {...buttonMotionConfig}
      onClick={toggleThemeHandler}
      className={`w-16 rounded-full bg-black p-4 text-white dark:bg-white dark:text-black ${props.className}`}
    >
      {!isDarkModeActive && <MotionMoonIcon {...iconsMotionConfig} />}
      {isDarkModeActive && <MotionSunIcon {...iconsMotionConfig} />}
    </motion.button>
  );
}
