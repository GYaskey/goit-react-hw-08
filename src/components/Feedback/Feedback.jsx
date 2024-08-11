import clsx from 'clsx';
import styles from './Feedback.module.css';

const Feedback = ({ options, total, rate }) => {
  return (
    <div className={clsx(styles.container)}>
      <ul className={clsx(styles.list)}>
        {options.map(([key, value]) => (
          <li key={key} className={clsx(styles.listItem)}>
            {key}: {value}
          </li>
        ))}
        <li className={clsx(styles.total)}>Total: {total}</li>
        <li className={clsx(styles.positiveRate)}>Positive: {rate}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
