import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { scale: 0, rotate: 180 },
  visible: {
    scale: 1,
    rotate: 0,
  },
};

export default function Title() {
  return (
    <motion.h1
      variants={container}
      initial='hidden'
      animate='visible'
      aria-label='Tic Tac Toe'
      className='flex w-full select-none items-center justify-center gap-3 self-start text-5xl font-bold tracking-widest sm:text-8xl'
    >
      <motion.span variants={item}>Tic</motion.span>
      <motion.span variants={item}>Tac</motion.span>
      <motion.span variants={item}>Toe</motion.span>
    </motion.h1>
  );
}
