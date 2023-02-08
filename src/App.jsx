import StartPage from './components/StartPage/StartPage';
import ThemeToggle from './components/UI/ThemeToggle';

export default function App() {
  return (
    <div className='grid place-content-center'>
      <StartPage />
      <ThemeToggle className='fixed bottom-0 right-0 m-4' />
    </div>
  );
}
