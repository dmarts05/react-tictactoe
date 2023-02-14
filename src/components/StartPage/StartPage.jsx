import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Logo from './Logo';
import Title from './Title';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import StartGameForm from './StartGameForm';

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
    duration: 1.8,
  },
};

const btnSvg = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='currentColor'
    className='h-6 w-6'
  >
    <path
      fillRule='evenodd'
      d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z'
      clipRule='evenodd'
    />
  </svg>
);

export default function StartPage() {
  const [showStartGameModal, setShowStartGameModal] = useState(false);

  const openModalHandler = () => {
    setShowStartGameModal(true);
  };

  const closeModalHandler = () => {
    setShowStartGameModal(false);
  };

  return (
    <header className='flex h-screen w-screen flex-col items-center justify-center gap-6 overflow-hidden transition-all'>
      <Logo />
      <Title />
      <motion.div {...btnAnimation}>
        <Button
          onClick={openModalHandler}
          animation={btnAnimation}
          styleType='secondary'
        >
          {btnSvg}
        </Button>
      </motion.div>

      <motion.div
        {...circleAnimation}
        className='fixed -z-10 h-[750px] w-[750px] select-none rounded-full border-4 border-zinc-900 dark:border-white'
      ></motion.div>
      <AnimatePresence initial={false} mode='wait' onExitComplete={() => null}>
        {showStartGameModal && (
          <Modal onCloseModal={closeModalHandler}>
            <StartGameForm onCloseModal={closeModalHandler} />
          </Modal>
        )}
      </AnimatePresence>
    </header>
  );
}
