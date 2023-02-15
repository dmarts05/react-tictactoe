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
    <fieldset id={name} className={extraClasses}>
      <legend className='w-fit pb-3 font-semibold uppercase'>{legend}</legend>
      {options.map(option => (
        <FormRadioButton
          groupName={name}
          name={option.name}
          label={option.label}
          key={option.name}
          register={register}
          errors={errors}
          validationSchema={validationSchema}
        />
      ))}
    </fieldset>
  );
}
