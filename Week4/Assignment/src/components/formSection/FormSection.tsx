import * as styles from '@components/formSection/FormSection.css';

interface FormSectionProps {
  title?: string;
  children: React.ReactNode;
}

const FormSection = ({ title, children }: FormSectionProps) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.head}>{title}</h1>
      <div className={styles.wrapper}>{children}</div>
    </section>
  );
};

export default FormSection;
