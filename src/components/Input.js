import React, { useState } from "react";

function Input({ onSubmit = () => null }) {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
  };
  const handleInputChang = (event) => setValue(event.target.value);
  return (
    <form onSubmit={handleSubmit} className="input-container">
      <input
        value={value}
        onChange={handleInputChang}
        placeholder="Create new task"
      />
    </form>
  );
}
export default Input;
