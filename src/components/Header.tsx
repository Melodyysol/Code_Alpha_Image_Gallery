import { Outlet } from "react-router";
import Navbar from "../layouts/Navbar";

export default function Header() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </header>
      <Outlet />
    </>
  );
}
