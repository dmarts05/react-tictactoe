import FormRadioButton from './FormRadioButton';

export default function FormRadioGroup({
  name,
  legend,
  selected,
  disabled = false,
  options,
  className: extraClasses,
  register,
  errors,
  validationSchema,
}) {
  return (
    <fieldset id={name} className={extraClasses} disabled={disabled}>
      <legend className='w-fit pb-3 font-semibold uppercase'>{legend}</legend>
      {options.map(option => (
        <FormRadioButton
          groupName={name}
          name={option.name}
          label={option.label}
          selected={selected}
          disabled={disabled}
          key={option.name}
          register={register}
          errors={errors}
          validationSchema={validationSchema}
        />
      ))}
    </fieldset>
  );
}
