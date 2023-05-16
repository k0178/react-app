interface Props {
  children: string;
  buttonClass: string;
  color?: "primary" | "secondary" | "danger" | "success" | "warning";
  // margin?: string;
  // padding?: string;
  onClick: () => void;
}

const Button = ({
  buttonClass,
  children,
  onClick,
  color,
}: // margin,
// padding,
Props) => {
  return (
    <button
      style={{ marginTop: "25px" }}
      className={buttonClass + " btn-" + color}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
