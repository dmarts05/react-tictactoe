export default function FormRadioButton({
  groupName,
  name,
  label,
  selected,
  disabled = false,
  register,
}) {
  return (
    <p
      className={`flex cursor-pointer items-center rounded-md border-2  bg-white pl-4 transition-colors duration-200 hover:border-zinc-800 focus:border-zinc-800 dark:hover:border-zinc-300 dark:focus:border-zinc-300 ${
        selected === name
          ? 'border-zinc-800 dark:border-zinc-300'
          : 'border-zinc-300 dark:border-zinc-800'
      } ${disabled && 'hover:border-zinc-300 dark:hover:border-zinc-800'}`}
    >
      <input
        type='radio'
        name={groupName}
        id={name}
        value={name}
        className='h-4 w-4 cursor-pointer border-2 border-zinc-300 bg-zinc-100 text-zinc-800 transition-all  duration-200 focus:ring-2 focus:ring-zinc-800 dark:border-zinc-800 dark:bg-white disabled:dark:border-zinc-300'
        {...register(groupName)}
      />
      <label
        htmlFor={name}
        className={`ml-2 w-full cursor-pointer py-1.5 text-sm font-medium text-zinc-800 ${
          disabled && 'text-zinc-300'
        }`}
      >
        {label}
      </label>
    </p>
  );
}
