export default function FormBasicInput(props) {
  return (
    <>
      <label htmlFor={props.name} className='w-fit font-semibold uppercase'>
        {props.label}
      </label>
      <input
        {...props.register(props.regName)}
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        className='rounded-md border-2 border-zinc-300 p-1.5 text-sm font-medium text-zinc-800 transition-colors duration-200 hover:border-zinc-800 focus:border-transparent focus:border-zinc-800 focus:ring-0 dark:border-zinc-800 dark:hover:border-zinc-300'
      />
      {/* {props.error && <span>{props.error}</span>} */}
    </>
  );
}
