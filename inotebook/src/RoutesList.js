import { About } from "./pages/About/Index";
import { Home } from "./pages/Home/Index";

export const publicRoutesList = [
  { name: "Home", url: "/", element: <Home /> },
  { name: "About", url: "/about", element: <About /> },
];
