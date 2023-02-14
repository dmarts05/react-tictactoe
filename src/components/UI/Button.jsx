import { motion } from 'framer-motion';

export default function Button(props) {
  let style = '';

  switch (props.styleType) {
    case 'primary':
      style =
        'border-zinc-900 bg-zinc-900 text-white hover:text-zinc-900 hover:bg-white dark:border-white dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-900 dark:hover:text-white';
      break;
    case 'secondary':
      style =
        'border-zinc-900 bg-white text-zinc-900 hover:bg-zinc-900 hover:text-white dark:border-white dark:bg-zinc-900 dark:text-white dark:hover:bg-white dark:hover:text-zinc-900';
      break;
    default:
      break;
  }

  return (
    <motion.button
      type={props.type}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={props.onClick}
      className={`w-fit select-none rounded-full border-2 py-1 px-4 transition-colors duration-300 ${style} ${props.className}`}
    >
      {props.children}
    </motion.button>
  );
}
