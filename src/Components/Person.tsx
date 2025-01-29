import { PersonProps } from "./PersonProps";

function Person(props: PersonProps) {
  return (
    <div>
      <h2>Hi {props.name.first + " " + props.name.last}</h2>
    </div>
  );
}

export default Person;
