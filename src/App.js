
import NavBar from "./scenes/NavBar";
import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";


function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("min-width: 1060px");
  

  return (
    <div className="App bg-deep-blue">
       <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
