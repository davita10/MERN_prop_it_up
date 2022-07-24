import logo from "./logo.svg";
import "./App.css";
import PersonCard from "./components/PersonCard";

function App(props) {
  const person =
    ({
      firstName: "Jane",
      lastName: "Doe",
      age: 35,
      hairColor: "Black",
    },
    {
      firstName: "John",
      lastName: "Smith",
      age: 88,
      hairColor: "Brown",
    },
    {
      firstName: "Millard",
      lastName: "Fillmore",
      age: 50,
      hairColor: "Brown",
    },
    {
      firstName: "Maria",
      lastName: "Smith",
      age: 62,
      hairColor: "Brown",
    });

  return (
    <div className="App">
      <h2>Hello Sunshine</h2>
      <PersonCard
        firstName={person.firstName}
        lastName={person.lastName}
        age={person.age}
        hairColor={person.hairColor}
      />
    </div>
  );
}

export default App;
