type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[]; // that how you passed array with object

  numArr: number[]; // that how you passed array
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2>
            {name.first} {name.last}
          </h2>
        );
      })}
      {props.numArr.map((item) => {
        return <h2>{item}</h2>;
      })}
    </div>
  );
};

export default PersonList;
