import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../styled/Buttons";
import "../index.css";

export interface IPropsForm {
  onSubmit: (input: string) => void;
}

export const Form = ({ onSubmit }: IPropsForm) => {
  const [input, setInput] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(input);
    setInput("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        className="formInput"
        type="text"
        value={input}
        onChange={handleChange}
      />
      <Button type="submit">Search</Button>
      <div></div>
    </form>
  );
};
