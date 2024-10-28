import {useState} from "react";

function App() {
  const [state, setState] = useState("Emin Başbayan");
  const [customers, setCustomers] = useState(["Emin Başbayan"]);

  let fullName = "Emin Başbayan";

  function handleNameChange() {
    fullName = "Ahmet Demir";
    // state = "Ahmet Demir";
    setState(fullName)
    console.log(fullName);
  }

  return (
    <div>
      <p>{state}</p>
      <button onClick={handleNameChange}>İsmi Değiştir!</button>
    </div>
  );
}

export default App;
