import "./App.css";
import Greet from "./Components/Greet";
import Person from "./Components/Person";
import PersonList from "./Components/PersonList";

function App() {
  let name = {
    first: "Eric",
    last: "Eagle",
  };

  let nameList = [
    {
      first: "Eric",
      last: "Eagle",
    },
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Naruto",
      last: "Uzumaki",
    },
  ];

  return (
    <>
      <h3 className="text-3xl font-bold  text-red-600">
        {/* Simple React Typescript Tailwind Sample */}
      </h3>
      <Greet name="Jaimin" messageCount={22} isLoggedIn={true} />
      <Person name={name} />
      <PersonList names={nameList} numArr={[1, 2, 3, 4, 5]} />
    </>
  );
}

export default App;
