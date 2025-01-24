type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

function Greet(props: GreetProps) {
  const { messageCount, isLoggedIn } = props;

  return (
    <div>
      {isLoggedIn ? (
        <h2>
          Hi {props.name},Welcome to Typscript you have {messageCount} dms
        </h2>
      ) : (
        "Welcome Guest"
      )}
    </div>
  );
}

export default Greet;
