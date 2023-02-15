import { motion } from 'framer-motion';

const warningSvg = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='currentColor'
    className='h-5 w-5'
  >
    <path
      fillRule='evenodd'
      d='M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z'
      clipRule='evenodd'
    />
  </svg>
);

export default function FormBasicInput({
  name,
  label,
  placeholder,
  disabled = false,
  register,
  errors,
  type,
  validationSchema,
}) {
  return (
    <>
      <label htmlFor={name} className='w-fit font-semibold uppercase'>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        className={`rounded-md border-2 border-zinc-300 p-1.5 text-sm font-medium text-zinc-800 transition-colors duration-200 hover:border-zinc-800 focus:border-transparent focus:border-zinc-800 focus:ring-0 disabled:cursor-not-allowed disabled:text-zinc-300 disabled:hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-300 ${
          errors &&
          errors[name] &&
          'border-red-600 text-red-600 dark:border-red-600 dark:text-red-600'
        }`}
        {...register(name, validationSchema)}
      />
      {errors && errors[name] && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className='flex flex-wrap items-center justify-center gap-1.5 rounded-md bg-red-100 p-1.5 text-center font-medium text-red-600'
        >
          {warningSvg}
          {errors[name]?.message}
        </motion.span>
      )}
    </>
  );
}
