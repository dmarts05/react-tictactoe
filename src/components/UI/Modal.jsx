import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';

const Backdrop = ({ onCloseModal }) => {
  return (
    <motion.div
      key='backdrop'
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.1 }}
      exit={{ opacity: 0 }}
      onClick={onCloseModal}
      className='fixed z-10 h-full w-full bg-zinc-900 dark:bg-white'
    />
  );
};

const ModalOverlay = ({ onCloseModal, modalContent }) => {
  return (
    <motion.div
      key='modal'
      drag='y'
      dragConstraints={{ top: 0, bottom: 0 }}
      dragMomentum={false}
      dragElastic={0.8}
      onDragEnd={(event, info) => {
        if (info.offset.y > 200) {
          onCloseModal();
        }
      }}
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      exit={{ y: 1000 }}
      transition={{ ease: 'easeInOut' }}
      className='fixed bottom-0 right-0 left-0 z-20 m-auto mt-16 h-5/6 rounded-xl rounded-b-none border-2 border-b-0 border-zinc-900 bg-white py-6 px-12 text-zinc-900 active:cursor-grabbing dark:border-white dark:bg-zinc-900 dark:text-white sm:w-2/3'
    >
      {modalContent}
    </motion.div>
  );
};

export default function Modal({ onCloseModal, children }) {
  return (
    <>
      {createPortal(
        <ModalOverlay onCloseModal={onCloseModal} modalContent={children} />,
        document.getElementById('overlay-root')
      )}
      {createPortal(
        <Backdrop onCloseModal={onCloseModal} />,
        document.getElementById('backdrop-root')
      )}
    </>
  );
}
