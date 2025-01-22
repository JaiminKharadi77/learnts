type GreetProps = {
  name: string;
};

function Greet(props: GreetProps) {
  return (
    <div>
      <h2>Hi {props.name},Welcome to Typscript</h2>
    </div>
  );
}

export default Greet;
