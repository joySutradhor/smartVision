import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Route/Router";

function App() {
  return (
    <div className="mt-5 pt-5">
      <div className="mt-lg-4 pt-lg-5">
        {" "}
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
