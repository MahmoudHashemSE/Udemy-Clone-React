import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import courses from "./pages/courses";
import CoursePage from "./pages/CoursePage";
import { useState } from "react";
import useFetch from "./hooks/useFetch";

function App() {
  const { loading, error, value } = useFetch(
    'https://api.npoint.io/1f3c0239d8c5b56edfa4',
    {},
    []
  )
  if(value)
  return (
    <div className="App">
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<HomePage courses={value.courses}/>}></Route>
          <Route
            path="/course/:ID"
            element={<CoursePage courses={value.courses} instructors={value.instructors}/>}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}
export default App;
