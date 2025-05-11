import * as styles from '@components/input/Input.css';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const Input = ({ label, id, ...props }: InputProps) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} className={styles.input} />
    </div>
  );
};

export default Input;
