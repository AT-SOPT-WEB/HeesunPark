import { button } from '@components/button/Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary';
}
const Button = ({
  children,
  disabled = false,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={button({ variant, disabled })}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
