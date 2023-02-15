import FormRadioButton from './FormRadioButton';

export default function FormRadioGroup({
  name,
  legend,
  className: extraClasses,
  options,
  register,
  errors,
  validationSchema,
}) {
  return (
    <fieldset
      id={name}
      className={extraClasses}
      {...register(name, validationSchema)}
    >
      <legend className='w-fit pb-3 font-semibold uppercase'>{legend}</legend>
      {options.map(option => (
        <FormRadioButton
          key={option.id}
          groupId={name}
          id={option.id}
          label={option.label}
        />
      ))}
      {errors && errors[name]?.type === 'required' && (
        <span className='error'>{errors[name]?.message}</span>
      )}
    </fieldset>
  );
}
