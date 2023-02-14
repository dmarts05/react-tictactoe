import { useForm } from 'react-hook-form';
import Button from '../UI/Button';

export default function StartGameForm(props) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className='flex flex-col'>
      <h2 className='mb-3 border-b-2 border-zinc-800 pb-6 text-center text-2xl font-semibold uppercase'>
        Game Options
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='grid grid-cols-2 gap-6'
      >
        <p className='flex flex-col gap-3'>
          <label
            htmlFor='player-1-name'
            className='w-fit font-semibold uppercase'
          >
            Player 1
          </label>
          <input
            {...register('player1Name')}
            type='text'
            name='player-1-name'
            id='player-1-name'
            placeholder='Name'
            className='rounded-md border-2 border-zinc-800 p-1 transition-colors duration-300 focus:border-transparent focus:bg-zinc-800 focus:text-white focus:ring-0'
          />
        </p>
        <p className='flex flex-col gap-3'>
          <label
            htmlFor='player-2-name'
            className='w-fit font-semibold uppercase'
          >
            Player 2
          </label>
          <input
            {...register('player2Name')}
            type='text'
            name='player-2-name'
            id='player-2-name'
            placeholder='Name'
            className='rounded-md border-2 border-zinc-800 p-1 transition-colors duration-300 focus:border-transparent focus:bg-zinc-800 focus:text-white focus:ring-0'
          />
        </p>
        <fieldset
          {...register('gamemode')}
          id='gamemode'
          className='col-span-full grid grid-cols-2 gap-3'
        >
          <legend className='w-fit pb-3 font-semibold uppercase'>
            Game Mode
          </legend>
          <p className='flex items-center rounded-md border-2 border-zinc-200 pl-4'>
            <input
              type='radio'
              name='gamemode'
              id='ai'
              value='ai'
              defaultChecked
              className='h-4 w-4 border-zinc-300 bg-zinc-100 text-zinc-800 transition-all duration-300 focus:ring-2 focus:ring-zinc-800'
            />
            <label
              htmlFor='ai'
              className='ml-2 w-full py-1.5 text-sm font-medium text-zinc-800'
            >
              AI
            </label>
          </p>
          <p className='flex items-center rounded-md border-2 border-zinc-200 pl-4'>
            <input
              type='radio'
              name='gamemode'
              id='pvp'
              value='pvp'
              className='h-4 w-4 border-zinc-300 bg-zinc-100 text-zinc-800 transition-all duration-300 focus:ring-2 focus:ring-zinc-800'
            />
            <label
              htmlFor='pvp'
              className='ml-2 w-full py-1.5 text-sm font-medium text-zinc-800'
            >
              PVP
            </label>
          </p>
        </fieldset>
        <fieldset
          {...register('difficulty')}
          id='difficulty'
          className='col-span-full grid grid-cols-2 gap-3'
        >
          <legend className='w-fit pb-3 font-semibold uppercase'>
            Difficulty
          </legend>
          <p className='flex items-center rounded-md border-2 border-zinc-200 pl-4'>
            <input
              type='radio'
              name='difficulty'
              id='easy'
              value='easy'
              className='h-4 w-4 border-zinc-300 bg-zinc-100 text-zinc-800 transition-all duration-300 focus:ring-2 focus:ring-zinc-800'
              defaultChecked
            />
            <label
              htmlFor='easy'
              className='ml-2 w-full py-1.5 text-sm font-medium text-zinc-800'
            >
              Easy
            </label>
          </p>
          <p className='flex items-center rounded-md border-2 border-zinc-200 pl-4'>
            <input
              type='radio'
              name='difficulty'
              id='normal'
              value='normal'
              className='h-4 w-4 border-zinc-300 bg-zinc-100 text-zinc-800 transition-all duration-300 focus:ring-2 focus:ring-zinc-800'
            />
            <label
              htmlFor='normal'
              className='ml-2 w-full py-1.5 text-sm font-medium text-zinc-800'
            >
              Normal
            </label>
          </p>
          <p className='flex items-center rounded-md border-2 border-zinc-200 pl-4'>
            <input
              type='radio'
              name='difficulty'
              id='hard'
              value='hard'
              className='h-4 w-4 border-zinc-300 bg-zinc-100 text-zinc-800 transition-all duration-300 focus:ring-2 focus:ring-zinc-800'
            />
            <label
              htmlFor='hard'
              className='ml-2 w-full py-1.5 text-sm font-medium text-zinc-800'
            >
              Hard
            </label>
          </p>
          <p className='flex items-center rounded-md border-2 border-zinc-200 pl-4'>
            <input
              type='radio'
              name='difficulty'
              id='impossible'
              value='impossible'
              className='h-4 w-4 border-zinc-300 bg-zinc-100 text-zinc-800 transition-all duration-300 focus:ring-2 focus:ring-zinc-800'
            />
            <label
              htmlFor='impossible'
              className='ml-2 w-full py-1.5 text-sm font-medium text-zinc-800'
            >
              Impossible
            </label>
          </p>
        </fieldset>

        <Button
          type='button'
          styleType='secondary'
          className='m-auto w-32'
          onClick={() => {
            reset();
            props.onCloseModal();
          }}
        >
          Cancel
        </Button>
        <Button type='submit' styleType='primary' className='m-auto w-32'>
          GO!
        </Button>
      </form>
    </div>
  );
}
