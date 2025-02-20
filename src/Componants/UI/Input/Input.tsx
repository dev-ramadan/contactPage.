import { InputHTMLAttributes } from "react";

interface IPropse extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ label, ...rest }: IPropse) => {
  return (
    <>
      <div className="relative border mx-4 mt-4">
        <label className={"absolute bottom-12 left-7 bg-white"}>{label}</label>
        <input type="text" className="w-full p-4" {...rest} />
      </div>
    </>
  );
};

export default Input;
