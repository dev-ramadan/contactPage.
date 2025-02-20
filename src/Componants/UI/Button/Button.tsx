import { HtmlHTMLAttributes, ReactNode } from "react";

interface IPropse extends HtmlHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  id?:string
}
const Button = ({ children, className, icon,id, ...res }: IPropse) => {
  return (
    <>
      <button
        className="w-fit p-3 bg-black text-white rounded-lg mx-5"
        {...res}
      >
        <div className="flex space-x-3 items-center">
          <div>{icon}</div>
          <div>{children}</div>
        </div>
      </button>
    </>
  );
};
// end

export default Button;
