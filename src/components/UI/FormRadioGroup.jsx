import { motion } from 'framer-motion';

export default function FormRadioGroup(props) {
  return (
    <fieldset
      {...props.register(props.regName)}
      id={props.id}
      className={props.className}
    >
      <legend className='w-fit pb-3 font-semibold uppercase'>
        {props.legend}
      </legend>
      {props.options.map(option => (
        <motion.p
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          key={option.id}
          className='flex cursor-pointer items-center rounded-md border-2 border-zinc-300 bg-white pl-4 transition-colors duration-200 hover:border-zinc-800 focus:border-zinc-800 dark:border-zinc-800 dark:hover:border-zinc-300 dark:focus:border-zinc-300'
        >
          <input
            type='radio'
            name={props.id}
            id={option.id}
            value={option.id}
            className='h-4 w-4 cursor-pointer border-zinc-300 bg-zinc-100 text-zinc-800 transition-all  duration-200 focus:ring-2 focus:ring-zinc-800'
          />
          <label
            htmlFor={option.id}
            className='ml-2 w-full cursor-pointer py-1.5 text-sm font-medium text-zinc-800'
          >
            {option.label}
          </label>
        </motion.p>
      ))}
    </fieldset>
  );
}
