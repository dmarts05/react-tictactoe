import { motion } from 'framer-motion';

export default function Button(props) {
  let classes = '';

  switch (props.styleType) {
    case 'primary':
      classes =
        'border-black bg-black text-white hover:text-black hover:bg-white dark:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white';
      break;
    case 'secondary':
      classes =
        'border-black bg-white text-black hover:bg-black hover:text-white dark:border-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black';
      break;
    default:
      break;
  }

  return (
    <motion.div {...props.animation}>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-fit select-none rounded-full border-2 py-1 px-4 transition-colors duration-300 ${classes}`}
      >
        {props.children}
      </motion.button>
    </motion.div>
  );
}
