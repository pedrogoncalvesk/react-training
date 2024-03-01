import { useState } from 'react';

export function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  const handleChange = e => {
    e.preventDefault();
    setValue(e.target.value)
  }

  return [value, handleChange]
}
