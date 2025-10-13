import { Hero } from "../components/Hero";
import { Barbell } from "./Barbell";
import { Equipment } from "./Equipment";
import { Progress } from "./Progress";
import {About} from "../components/About";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Barbell />
      <Equipment />
      <Progress />

    </div>
  );
}

export default App;
