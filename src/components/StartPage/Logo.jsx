import { motion } from 'framer-motion';
import logoImgUrl from '../../assets/logo.png';

export default function Logo() {
  return (
    <motion.div
      initial={{ scale: 0, rotate: 180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 1.5 }}
      className='rounded-full border-8 border-white invert filter transition-colors duration-300 dark:border-transparent sm:border-[10px]'
    >
      <img src={logoImgUrl} alt='Logo' className=' w-48 sm:w-72' />
    </motion.div>
  );
}
