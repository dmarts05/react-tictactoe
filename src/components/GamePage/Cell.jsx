import { motion } from 'framer-motion';

export default function Cell({
  index,
  content,
  variants,
  isAiTurn,
  isCellWinningCombo,
  isTie,
  onPerformPlayerMove,
  hasGameEnded,
}) {
  const isCellUsed = content !== ' ';

  return (
    <motion.div variants={variants}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          if (!isCellUsed && !isAiTurn && !hasGameEnded())
            onPerformPlayerMove(index);
        }}
        className={`grid h-24 w-24 cursor-pointer select-none place-content-center rounded-2xl border-4 border-zinc-800 transition-colors duration-200 dark:border-white ${
          (hasGameEnded() || isAiTurn) && 'cursor-not-allowed'
        } ${
          isCellWinningCombo(index) &&
          'border-yellow-400 dark:border-yellow-400'
        } ${isTie && 'border-blue-400 dark:border-blue-400'}`}
      >
        <motion.p
          key={content}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className={`text-5xl font-medium text-zinc-800 dark:text-white ${
            isCellWinningCombo(index) && 'text-yellow-400 dark:text-yellow-400'
          } ${isTie && 'text-blue-400 dark:text-blue-400'}`}
        >
          {content}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
