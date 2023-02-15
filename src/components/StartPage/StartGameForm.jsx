import { useForm } from 'react-hook-form';
import FormBasicInput from '../UI/FormBasicInput';
import FormRadioGroup from '../UI/FormRadioGroup';
import Button from '../UI/Button';

export default function StartGameForm({ onCloseModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      gameMode: 'ai',
      difficulty: 'easy',
    },
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className='flex flex-col'>
      <h2 className='mb-3 border-b-2 border-zinc-800 pb-6 text-center text-2xl font-semibold uppercase dark:border-white'>
        Game Options
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='grid grid-cols-2 gap-y-6 gap-x-3'
      >
        <p className='flex flex-col gap-3'>
          <FormBasicInput
            type='text'
            name='playerOneName'
            label='Player 1'
            placeholder='Name'
            errors={errors}
            register={register}
            validationSchema={{
              required: 'Player 1 name is required!',
              minLength: {
                value: 3,
                message: 'Please enter a minimum of 3 characters',
              },
            }}
          />
        </p>
        <p className='flex flex-col gap-3'>
          <FormBasicInput
            type='text'
            name='playerTwoName'
            label='Player 2'
            placeholder='Name'
            errors={errors}
            register={register}
            validationSchema={{
              required: 'Player 2 name is required!',
              minLength: {
                value: 3,
                message: 'Please enter a minimum of 3 characters',
              },
            }}
          />
        </p>
        <FormRadioGroup
          name='gameMode'
          legend='Game Mode'
          options={[
            { id: 'ai', label: 'AI' },
            { id: 'pvp', label: 'PVP' },
          ]}
          className='col-span-full grid grid-cols-2 gap-3'
          errors={errors}
          register={register}
          validationSchema={
            {
              // required: 'Game mode is required!',
            }
          }
        />
        <FormRadioGroup
          name='difficulty'
          legend='Difficulty'
          options={[
            { id: 'easy', label: 'Easy' },
            { id: 'normal', label: 'Normal' },
            { id: 'hard', label: 'Hard' },
            { id: 'impossible', label: 'Impossible' },
          ]}
          className='col-span-full grid grid-cols-2 gap-3'
          errors={errors}
          register={register}
          validationSchema={
            {
              // required: 'Difficulty mode is required!',
            }
          }
        />

        <Button
          type='button'
          styleType='secondary'
          className='m-auto w-2/3'
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button type='submit' styleType='primary' className='m-auto w-2/3'>
          GO!
        </Button>
      </form>
    </div>
  );
}
