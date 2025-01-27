type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  title?: string;
};

const Button = (props: ButtonProps) => {
  const { handleClick, title = "Click" } = props;

  return <button onClick={(event) => handleClick(event, 1)}>{title}</button>;
};

export default Button;
