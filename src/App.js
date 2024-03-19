// importing CSS for app component
import "./App.css";
// importing 3 components of our app
import Navbar from "./components/NavBar";
import ControlPanel from "./components/ControlPanel";
import DetailsPanel from "./components/DetailsPanel";
// functional component
function App() {
  // bundling our components
  return (

    <>

      <Navbar/>

      <div className="main-div">

        <ControlPanel/>

        <DetailsPanel/>

      </div>

    </>

  );

}
// exporting component
export default App;
