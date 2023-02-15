import { motion } from 'framer-motion';

export default function FormRadioButton({ groupId, id, label }) {
  return (
    <motion.p
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className='flex cursor-pointer items-center rounded-md border-2 border-zinc-300 bg-white pl-4 transition-colors duration-200 hover:border-zinc-800 focus:border-zinc-800 dark:border-zinc-800 dark:hover:border-zinc-300 dark:focus:border-zinc-300'
    >
      <input
        type='radio'
        name={groupId}
        id={id}
        value={id}
        className='h-4 w-4 cursor-pointer border-2 border-zinc-300 bg-zinc-100 text-zinc-800 transition-all  duration-200 focus:ring-2 focus:ring-zinc-800 dark:border-zinc-800 dark:bg-white'
      />
      <label
        htmlFor={id}
        className='ml-2 w-full cursor-pointer py-1.5 text-sm font-medium text-zinc-800'
      >
        {label}
      </label>
    </motion.p>
  );
}
