import { Link } from "react-router";
import { Header } from "../components";

export default function Error() {
  return (
    <>
      <Header />
      <main className="flex justify-center items-center min-h-[80vh]">
        <div className="container mx-auto max-w-md bg-base-200 border border-base-300 p-10 rounded-xl text-base-content space-y-3">
          <h1 className="text-lg font-bold">Page not found</h1>
          <p>The page you are looking for is not available.</p>
          <Link to="/" className="btn btn-info">
            Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}
