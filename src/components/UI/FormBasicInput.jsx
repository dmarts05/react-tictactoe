export default function FormBasicInput({
  name,
  label,
  placeholder,
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
        className='rounded-md border-2 border-zinc-300 p-1.5 text-sm font-medium text-zinc-800 transition-colors duration-200 hover:border-zinc-800 focus:border-transparent focus:border-zinc-800 focus:ring-0 dark:border-zinc-800 dark:hover:border-zinc-300'
        {...register(name, validationSchema)}
      />
      {errors && errors[name]?.type === 'required' && (
        <span className='error'>{errors[name]?.message}</span>
      )}
    </>
  );
}
