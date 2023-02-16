export default function Cell({ content }) {
  return (
    <div className='grid h-24 w-24 place-content-center rounded-2xl border-4 border-white text-5xl font-medium'>
      {content}
    </div>
  );
}
