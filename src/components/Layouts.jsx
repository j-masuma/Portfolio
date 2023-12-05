import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import Footer from "./Footer";
// eslint-disable-next-line react/prop-types
export default function Layouts({ children }) {
  return (
    <div className="flex flex-col p-[5-rem] pt-4 border border-blue-900">
      <div className="flex flex-col">
        <Header />
        <div>{children || <Outlet />}</div>
        <Footer />
      </div>
    </div>
  );
}
