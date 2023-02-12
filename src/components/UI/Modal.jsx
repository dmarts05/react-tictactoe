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
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      exit={{ y: 1000 }}
      className='fixed inset-0 z-20 my-16 mx-8 rounded-xl border-2 border-black bg-white text-black dark:border-white dark:bg-black dark:text-white ss:mx-16'
    >
      {props.modalContent}
    </motion.div>
  );
};

export default function Modal(props) {
  return (
    <>
      {createPortal(
        <ModalOverlay modalContent={props.children} />,
        document.getElementById('overlay-root')
      )}
      {createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        document.getElementById('backdrop-root')
      )}
    </>
  );
}
