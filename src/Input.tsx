type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input(props: InputProps) {
  return (
    <div>
      <input
        type="text"
        value={props.value}
        onChange={props.handleChange}
        className=" bg-yellow-300"
      />
    </div>
  );
}
