import "./App.css";
import Models from "./components/Models";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="bg-slate-600 min-h-screen relative z-0">
        <Models />
      </div>
    </div>
  );
}

export default App;
