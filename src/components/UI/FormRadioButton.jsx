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
      className={`flex cursor-pointer items-center rounded-md border-2  bg-white pl-4 transition-colors duration-200 hover:border-zinc-800 focus:border-zinc-800 dark:bg-zinc-800 dark:hover:border-white dark:focus:border-white ${
        selected === name
          ? 'border-zinc-800 dark:border-white'
          : 'border-zinc-300 dark:border-zinc-600'
      } ${
        disabled &&
        'cursor-not-allowed hover:border-zinc-300 dark:bg-zinc-600 dark:hover:border-zinc-600'
      }`}
    >
      <input
        type='radio'
        name={groupName}
        id={name}
        value={name}
        className='h-4 w-4 cursor-pointer border-2 border-zinc-300 bg-zinc-100 text-zinc-800 transition-all  duration-200 focus:ring-2 focus:ring-zinc-800 disabled:cursor-not-allowed dark:border-zinc-300 dark:bg-zinc-800 dark:text-white dark:ring-zinc-800 disabled:dark:border-zinc-300 disabled:dark:bg-zinc-600'
        {...register(groupName)}
      />
      <label
        htmlFor={name}
        className={`ml-2 w-full cursor-pointer py-1.5 text-sm font-medium text-zinc-800 dark:text-white ${
          disabled && 'cursor-not-allowed text-zinc-300'
        }`}
      >
        {label}
      </label>
    </p>
  );
}
