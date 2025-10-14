import { Hero } from "../components/Hero";
import { Barbell } from "./Barbell";
import { Facility } from "./Facility";
import {About} from "../components/About";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Facility />
      <Barbell />
    </div>
  );
}

export default App;
