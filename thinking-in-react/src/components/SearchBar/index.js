import { useState } from "react";

export default function SearchBar({ defaultValue }) {
  const [value, setValue] = useState(defaultValue);

  // const onChange = (e) => {
  //   console.log(e.target.value)
  //   setValue(e.target.value);
  // }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('onSubmit', value);
    setValue(e.target.value);
  };

  return (
    <form style={{ display: 'flex', flexFlow: 'column' }} onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search..."
        // onChange={onChange}
        onBlur={onSubmit}
        defaultValue={defaultValue}
      />
      <label>
        <input type="checkbox" /> Only show products in stock
      </label>
    </form>
  );
}
