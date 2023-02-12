import { motion } from 'framer-motion';
import Title from './Title';
import Button from '../UI/Button';

export default function StartPage() {
  const btnAnimation = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: { delay: 1.2 },
  };

  const circleAnimation = {
    initial: { scale: 0 },
    animate: { opacity: [0, 1, 0], scale: [0, 2, 0] },
    transition: {
      type: 'spring',
      duration: 1.5,
    },
  };

  return (
    <header className='realtive flex h-screen w-screen flex-col items-center justify-center gap-6 overflow-hidden'>
      <Title />
      <Button animation={btnAnimation} styleType='secondary'>
        Start
      </Button>
      <motion.div
        {...circleAnimation}
        className='fixed -z-10 h-[750px] w-[750px] select-none rounded-full border-4 border-white'
      ></motion.div>
    </header>
  );
}
