import styles from './FormField.module.scss';

function FormField({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) {
  return (
    <div className={styles.formfield}>
      <div className={styles.fields}>
        <label htmlFor={name}>{labelName}</label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className={styles.surprise}
          >
            Surprise me
          </button>
        )}
      </div>
      <input
        className={styles.input}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
}

export default FormField;
