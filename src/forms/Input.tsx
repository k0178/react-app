import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  value?: DoubleRange | string;
}

const Input = ({ children }: Props) => {
  return (
    <div className="input-group my-3">
      <span className="input-group-text" id="basic-addon1">
        $
      </span>
      <input
        type="text"
        className="form-control "
        placeholder="Enter amount"
        aria-label="Username"
        aria-describedby="basic-addon1d"
        value={children}
      />
    </div>
  );
};

export default Input;
