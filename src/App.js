import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Workout from "./component/Workout";
import HomePage from "./component/HomePage";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Workout" element={<Workout />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
