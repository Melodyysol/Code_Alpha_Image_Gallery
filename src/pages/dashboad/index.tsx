// import Profile from "./Profile";
// import AddImage from "./AddImage";
import Gallery from "./Gallery";
import { UseAuth, UseUtilities } from "../../custom-hooks";
import { Navigate } from "react-router";
import Sidebar from "../../layouts/Sidebar";
import { Header } from "../../components";

export default function Dashboard() {
  const { user, loading } = UseAuth();
  const { collapsed } = UseUtilities();
  if (loading)
    return (
      <div
        className="min-h-screen flex items-center justify-center bg-base-200"
        role="status"
        aria-label="Loading dashboard"
      >
        <div className="loading loading-infinity loading-xl loading-spinner "></div>
        <span className="sr-only">Loading dashboard</span>
      </div>
    );
  if (!user) return <Navigate to="/login" />;
  return (
    <>
      <Header />
      <Sidebar />
      {/* Mobile */}
      <main className="md:hidden min-h-screen bg-base-200 py-28 px-5 grid grid-cols-1 gap-5">
        <Gallery />
      </main>

      {/* Desktop */}
      <main
        className={`hidden min-h-screen bg-base-200 py-28 px-5 md:grid gap-5 ${collapsed ? "ml-20 md:grid-cols-3 lg:grid-cols-4" : "ml-70 md:grid-cols-2 lg:grid-cols-3"}`}
      >
        <Gallery />
      </main>
    </>
  );
}
