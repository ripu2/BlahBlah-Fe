import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home_page";
import { useCurrentUser } from "./pages/home_page/hooks/userHooks";


const AppRouter = () => {

  const data = useCurrentUser()

  console.log('data', data);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
