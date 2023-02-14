import { useForm } from 'react-hook-form';
import FormBasicInput from '../UI/FormBasicInput';
import FormRadioGroup from '../UI/FormRadioGroup';
import Button from '../UI/Button';

export default function StartGameForm(props) {
  const { register, handleSubmit, reset } = useForm();

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
            register={register}
            regName='player1Name'
            id='player-1-name'
            type='text'
            name='player-1-name'
            label='Player 1'
            placeholder='Name'
            error='Error'
          />
        </p>
        <p className='flex flex-col gap-3'>
          <FormBasicInput
            register={register}
            regName='player2Name'
            id='player-2-name'
            type='text'
            name='player-2-name'
            label='Player 2'
            placeholder='Name'
            error='Error'
          />
        </p>
        <FormRadioGroup
          register={register}
          regName='gameMode'
          id='game-mode'
          legend='Game Mode'
          options={[
            { id: 'ai', label: 'AI' },
            { id: 'pvp', label: 'PVP' },
          ]}
          className='col-span-full grid grid-cols-2 gap-3'
        />
        <FormRadioGroup
          register={register}
          regName='difficulty'
          id='difficulty'
          legend='Difficulty'
          options={[
            { id: 'easy', label: 'Easy' },
            { id: 'normal', label: 'Normal' },
            { id: 'hard', label: 'Hard' },
            { id: 'impossible', label: 'Impossible' },
          ]}
          className='col-span-full grid grid-cols-2 gap-3'
        />
        <Button
          type='button'
          styleType='secondary'
          className='m-auto w-2/3'
          onClick={() => {
            reset();
            props.onCloseModal();
          }}
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
