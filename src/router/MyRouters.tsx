import { Route, Routes } from "react-router-dom";
import pageList from "../constant/pageList";

const MyRouters = () => {
  return (
    <Routes>
      {pageList
        .filter((item) => item.is_visible)
        .map((page) => (
          <Route key={page.id} element={page.element} path={page.path} />
        ))}
    </Routes>
  );
};

export default MyRouters;
