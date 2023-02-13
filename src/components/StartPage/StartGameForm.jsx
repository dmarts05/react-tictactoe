import { useForm } from 'react-hook-form';

export default function StartGameForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className='grid justify-center'>
      <h2 className='text-2xl font-semibold uppercase'>Game Options</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          <label htmlFor='player-1-name'>Player 1</label>
          <input
            {...register('player1Name')}
            type='text'
            name='player-1-name'
            id='player-1-name'
            placeholder='Name'
          />
        </p>
        <p>
          <label htmlFor='player-2-name'>Player 2</label>
          <input
            {...register('player2Name')}
            type='text'
            name='player-2-name'
            id='player-2-name'
            placeholder='Name'
          />
        </p>
        <fieldset {...register('gamemode')} id='gamemode'>
          <legend>Game Mode</legend>
          <p>
            <label htmlFor='ai'>AI</label>
            <input
              type='radio'
              name='gamemode'
              id='ai'
              value='ai'
              defaultChecked
            />
          </p>
          <p>
            <label htmlFor='pvp'>PVP</label>
            <input type='radio' name='gamemode' id='pvp' value='pvp' />
          </p>
        </fieldset>
        <fieldset {...register('difficulty')} id='difficulty'>
          <legend>Difficulty</legend>
          <p>
            <label htmlFor='easy'>Easy</label>
            <input
              type='radio'
              name='difficulty'
              id='easy'
              value='easy'
              defaultChecked
            />
          </p>
          <p>
            <label htmlFor='normal'>Normal</label>
            <input type='radio' name='difficulty' id='normal' value='normal' />
          </p>
          <p>
            <label htmlFor='hard'>Hard</label>
            <input type='radio' name='difficulty' id='hard' value='hard' />
          </p>
        </fieldset>

        <button>GO!</button>
      </form>
    </div>
  );
}
