import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Index from "./pages";
import About from "./pages/about";
import Skill from "./pages/skill";
import Contact from "./pages/contact";
import Navbar from "./components/navbar";

const router = createBrowserRouter([
  {path: "/", element: <Index />},
  {path: "/about", element: <About />},
  {path: "/skill", element: <Skill />},
  {path: "/contact", element: <Contact />}
])

function App() {
  return (
    <div>
    <Navbar />
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
