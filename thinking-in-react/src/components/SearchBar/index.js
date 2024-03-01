import { useFormInput } from "./useFormInput";

export default function SearchBar({ defaultValue, onChange }) {
  const [inputValue, setInputValue] = useFormInput(defaultValue);

  const handleSubmit = e => {
    e.preventDefault();
    onChange(e.target[0].value);
  };

  const handleBlur = e => {
    e.preventDefault();
    onChange(e.target.value);
  };

  return (
    <form style={{ display: 'flex', flexFlow: 'column' }} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        onChange={setInputValue}
        onBlur={handleBlur}
        value={inputValue}
        defaultValue={defaultValue}
      />
      <label>
        <input type="checkbox" /> Only show products in stock
      </label>
    </form>
  );
}
