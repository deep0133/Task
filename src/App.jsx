import { RecoilRoot } from "recoil";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className=' max-w-[120rem] mx-auto w-full relative'>
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Home />
                  <Footer />
                </>
              }
            />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </div>
  );
}
