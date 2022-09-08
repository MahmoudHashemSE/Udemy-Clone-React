import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import courses from "./pages/courses";
import CoursePage from "./pages/CoursePage";
function App() {
  return (
    <div className="App">
      <div style={{minHeight: "100vh"}}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/course/:ID" element={<CoursePage courses={courses}/>}></Route>
        </Routes>
      </div>
    </div>
  );
}
export default App;
