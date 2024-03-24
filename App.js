import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements, // Fixed typo here
  Route,
  RouterProvider
} from "react-router-dom";

import Main from "./Components/Home/Main";
import PropertyList from "./Components/Home/PropertyList";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main />} exact>
        <Route path="/" element={<PropertyList/>}exact></Route>
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
