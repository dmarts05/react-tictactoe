import { motion } from 'framer-motion';

export default function Button({
  type,
  styleType,
  onClick,
  className: extraClasses,
  children,
}) {
  let style = '';

  switch (styleType) {
    case 'primary':
      style =
        'border-zinc-900 bg-zinc-900 text-white dark:border-white dark:bg-white dark:text-zinc-900';
      break;
    case 'secondary':
      style =
        'border-zinc-900 bg-white text-zinc-900 dark:border-white dark:bg-zinc-900 dark:text-white';
      break;
    default:
      break;
  }

  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`w-fit select-none rounded-full border-2 py-1 px-4 transition-colors duration-300 ${style} ${extraClasses}`}
    >
      {children}
    </motion.button>
  );
}
