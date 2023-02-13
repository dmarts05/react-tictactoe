import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';

const Backdrop = props => {
  return (
    <motion.div
      key='backdrop'
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.1 }}
      exit={{ opacity: 0 }}
      onClick={props.onCloseModal}
      className='fixed z-10 h-full w-full bg-black dark:bg-white'
    />
  );
};

const ModalOverlay = props => {
  return (
    <motion.div
      key='modal'
      drag='y'
      dragConstraints={{ top: 0, bottom: 0 }}
      dragMomentum={false}
      dragElastic={0.8}
      onDragEnd={(event, info) => {
        if (info.offset.y > 350) {
          props.onCloseModal();
        }
      }}
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      exit={{ y: 1000 }}
      className='fixed bottom-0 right-0 left-0 z-20 m-auto mt-16 h-5/6 rounded-xl rounded-b-none border-2 border-b-0 border-black bg-white text-black active:cursor-grabbing dark:border-white dark:bg-black dark:text-white sm:w-2/3'
    >
      {props.modalContent}
    </motion.div>
  );
};

export default function Modal(props) {
  return (
    <>
      {createPortal(
        <ModalOverlay
          onCloseModal={props.onCloseModal}
          modalContent={props.children}
        />,
        document.getElementById('overlay-root')
      )}
      {createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        document.getElementById('backdrop-root')
      )}
    </>
  );
}
