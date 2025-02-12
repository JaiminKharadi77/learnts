import "./App.css";
import { useState } from "react";
import Greet from "./Components/Greet";
import Person from "./Components/Person";
import PersonList from "./Components/PersonList";
import Status from "./Components/Status";
import Heading from "./Components/Heading";
import Oscar from "./Components/Oscar";
import Button from "./Components/Button";
import Input from "./Input";
import Container from "./Components/Container";
import { LoggedIn } from "./Components/state/Loggin";
// import { User } from "./Components/state/User";
import CoutnerReducer from "./Components/CoutnerReducer";
import { ThemeContextProvider } from "./Components/context/ThemeContext";
import Box from "./Components/context/Box";

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

  const [text, setText] = useState("");

  return (
    <>
      <h3 className="text-3xl font-bold  text-red-600">
        {/* Simple React Typescript Tailwind Sample */}
      </h3>
      {/* <Greet name="Jaimin" messageCount={22} isLoggedIn={true} />
      <Person name={name} />
      <PersonList names={nameList} numArr={[1, 2, 3, 4, 5]} /> */}
      {/* <Status status={"loading"} />
      <Heading>PLaceHolder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Akshay khanna</Heading>
      </Oscar>

      <Greet name="Jaimin" isLoggedIn={true} /> */}
      {/* <Button
        handleClick={(event, id) =>
          console.log("Button is Workding", event, id)
        }
      />
      <Input
        value={text}
        handleChange={(event) => setText(event.target.value)}
      /> */}
      {/* <Container
        styles={{ border: "1px solid black", padding: "1rem" }}
      ></Container>
      <Person name={name} />
      <PersonList names={nameList} numArr={[1, 2, 3, 4, 5]} />
      <LoggedIn /> */}
      {/* <User /> */}
      {/* <CoutnerReducer /> */}
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      
    </>
  );
}

export default App;
