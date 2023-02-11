import Title from './Title';
import Button from '../UI/Button';

export default function StartPage() {
  const btnAnimation = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: { delay: 1.2 },
  };

  return (
    <header className='flex h-screen w-screen flex-col items-center justify-center gap-6 overflow-hidden'>
      <Title />
      <Button animation={btnAnimation} styleType='secondary'>
        Start
      </Button>
    </header>
  );
}
