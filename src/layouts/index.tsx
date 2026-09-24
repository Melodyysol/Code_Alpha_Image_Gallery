import { Outlet } from "react-router";
import { Header } from "../components";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  );
}
