import clsx from 'clsx';
import styles from './Options.module.css';

const Options = ({ options, updateFeedback, total, resetFeedback }) => {
  return (
    <div className={clsx(styles.container)}>
      {options.map((option, i) => (
        <button
          key={i}
          className={clsx(styles.button)}
          onClick={() => {
            updateFeedback(option);
          }}
        >
          {option}
        </button>
      ))}
      {total > 0 && (
        <button className={clsx(styles.resetButton)} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
