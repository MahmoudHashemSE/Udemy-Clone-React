import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";
import { useState, createContext, useEffect } from "react";
export const dataContext = createContext();
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("");
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.npoint.io/ae9bf60889e61514f9b2`)
      .then((res) => res.json())
      .then((result) => {
        setData(result)
        console.log(result)
        setIsLoading(false)
      })
      .catch(console.log);
  }, []);
  return (
    <dataContext.Provider value={{data, isLoading}}>
      <div className="App">
        <div style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/course/:ID" element={<CoursePage />}></Route>
          </Routes>
        </div>
      </div>
    </dataContext.Provider>
  );
}
export default App;
