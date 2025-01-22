import "./App.css";
import Greet from "./Components/Greet";

function App() {
  return (
    <>
      <h3 className="text-3xl font-bold  text-red-600">
        Simple React Typescript Tailwind Sample
      </h3>
      <Greet name="Bchase" />
    </>
  );
}

export default App;
