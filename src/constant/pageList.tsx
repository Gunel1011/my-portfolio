import type { ReactNode } from "react";
import Home from "../Modules/Home/View/Home";
interface IPage {
  id: string;
  title: string;
  path: string;
  element: ReactNode;
  is_visible: boolean;
}
const pageList: IPage[] = [
  {
    id: "home",
    title: "Home",
    path: "/",
    element: <Home />,
    is_visible: true,
  },
  {
    id: "about",
    title: "About",
    path: "/",
    element: <Home />,
    is_visible: true,
  },
  {
    id: "work",
    title: "Work",
    path: "/",
    element: <Home />,
    is_visible: true,
  },
  {
    id: "contact",
    title: "Contact",
    path: "/",
    element: <Home />,
    is_visible: true,
  },
];
export default pageList;
