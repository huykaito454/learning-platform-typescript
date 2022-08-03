interface Props {
  className?: any;
  [x: string]: any;
}
const Button: React.FC<Props> = ({ children, className = "", ...rest }) => {
  return (
    <button className={`button ${className} `} {...rest}>
      {children}
    </button>
  );
};

export default Button;
