import { useData } from "../ContextProvider";
import Card from "./components/Card";
import Thanks from "./components/Thanks";

function App() {
  const [value, setValue] = useData();
  return <main>{value ? <Thanks /> : <Card />}</main>;
}

export default App;
