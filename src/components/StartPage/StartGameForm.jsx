import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import useGameStore from '../../store/store';
import FormBasicInput from '../UI/FormBasicInput';
import FormRadioGroup from '../UI/FormRadioGroup';
import Button from '../UI/Button';

export default function StartGameForm({ onCloseModal }) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    defaultValues: {
      gameMode: 'ai',
      difficulty: 'easy',
    },
  });

  const gameMode = watch('gameMode');
  const difficulty = watch('difficulty');

  useEffect(() => {
    if (gameMode === 'ai') {
      setValue('playerTwoName', 'AI', { shouldValidate: true });
      setValue('difficulty', 'easy');
    } else {
      setValue('playerTwoName', '', { shouldValidate: true });
      setValue('difficulty', undefined);
    }
  }, [setValue, gameMode]);

  const toggleIsGameInProgress = useGameStore(
    state => state.toggleIsGameInProgress
  );

  const onSubmit = data => {
    console.log(data);
    onCloseModal();

    // TODO: Use AnimatePresence to avoid this
    setTimeout(() => {
      toggleIsGameInProgress();
    }, 300);
  };

  return (
    <div className='flex flex-col'>
      <h2 className='mb-6 border-b-2 border-zinc-800 pb-6 text-center text-2xl font-semibold uppercase dark:border-white'>
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
              pattern: {
                value: /^[^\s]+(?:$|.*[^\s]+$)/,
                message:
                  'Entered value cannot start/end or contain only white spacing',
              },
              minLength: {
                value: 2,
                message: 'Enter a minimum of 2 characters',
              },
              maxLength: {
                value: 16,
                message: 'Enter no more than 16 characters',
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
            disabled={gameMode === 'ai'}
            errors={errors}
            register={register}
            validationSchema={{
              required: 'Player 2 name is required!',
              pattern: {
                value: /^[^\s]+(?:$|.*[^\s]+$)/,
                message:
                  'Entered value cannot start/end or contain only white spacing',
              },
              minLength: {
                value: 2,
                message: 'Enter a minimum of 2 characters',
              },
              maxLength: {
                value: 16,
                message: 'Enter no more than 16 characters',
              },
            }}
          />
        </p>
        <FormRadioGroup
          name='gameMode'
          legend='Game Mode'
          selected={gameMode}
          options={[
            { name: 'ai', label: 'AI' },
            { name: 'pvp', label: 'PVP' },
          ]}
          className='col-span-full grid grid-cols-2 gap-3'
          register={register}
        />
        <FormRadioGroup
          name='difficulty'
          legend='Difficulty'
          selected={difficulty}
          disabled={gameMode === 'pvp'}
          options={[
            { name: 'easy', label: 'Easy' },
            { name: 'normal', label: 'Normal' },
            { name: 'hard', label: 'Hard' },
            { name: 'impossible', label: 'Impossible' },
          ]}
          className='disabled: col-span-full grid grid-cols-2 gap-3 disabled:cursor-not-allowed disabled:text-zinc-300'
          register={register}
        />

        <Button
          type='button'
          styleType='secondary'
          className='m-auto w-28'
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button type='submit' styleType='primary' className='m-auto w-28'>
          GO!
        </Button>
      </form>
    </div>
  );
}
