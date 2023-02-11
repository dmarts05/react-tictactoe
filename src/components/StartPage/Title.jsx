import { motion } from 'framer-motion';

export default function Title() {
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
    hidden: { x: -500, scale: 0 },
    visible: {
      x: 0,
      scale: 1,
    },
  };

  const item2 = {
    hidden: { x: 500, scale: 0 },
    visible: {
      x: 0,
      scale: 1,
    },
  };

  return (
    <motion.h1
      variants={container}
      initial='hidden'
      animate='visible'
      aria-label='Tic Tac Toe'
      className='flex w-full select-none flex-col items-center justify-center gap-3 self-start text-8xl font-bold tracking-widest sm:flex-row'
    >
      <motion.span variants={item} className=''>
        Tic
      </motion.span>
      <motion.span variants={item2}>Tac</motion.span>
      <motion.span variants={item}>Toe</motion.span>
    </motion.h1>
  );
}
