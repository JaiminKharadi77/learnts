type GreetProps = {
  name: string;
  messageCount?: number; // Option object props we are telling ts that this object is not needed
  isLoggedIn: boolean;
};

function Greet(props: GreetProps) {
  const { messageCount, isLoggedIn } = props;

  return (
    <div>
      {isLoggedIn ? (
        <h2>
          Hi {props.name},Welcome to Typscript you have {messageCount ?? 0} dms
        </h2>
      ) : (
        "Welcome Guest"
      )}
    </div>
  );
}

export default Greet;
