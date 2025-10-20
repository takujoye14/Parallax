import { Hero } from "../components/Hero";
import { Barbell } from "../components/Barbell";
import { Facility } from "../components/Facility";
import {About} from "../components/About";
import {Contact} from "../components/Contact";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Facility />
      <Contact/>
      <Barbell />
    </div>
  );
}

export default App;
