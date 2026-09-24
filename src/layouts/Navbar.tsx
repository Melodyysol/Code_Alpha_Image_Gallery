import { Link, NavLink } from "react-router";
import { devLogo } from "../utilities/images";
import { FormInput, Icon } from "../components";
import { FaSearch } from "react-icons/fa";
import { Menu, MessageCircleWarning, Settings, UserCircle } from "lucide-react";
import { UseAuth, UseUtilities } from "../custom-hooks";
import { useState, type FormEvent } from "react";
import UseUpload from "../custom-hooks/UseUpload";

const categories = ["animals", "ecommerce", "food", "landscapes", "people"];

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { user } = UseAuth();
  const { onToggle } = UseUtilities();
  const { getImages } = UseUpload();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await getImages("", search);
    } catch (error) {
      console.error("Unable to search images:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <nav
      className={`navbar border-b-2 border-b-base-300 text-primary-content shadow bg-base-100 ${user && "flex justify-between items-center pr-5"}`}
    >
      <div className={`${user ? "flex-none" : "flex-1"}`}>
        <NavLink
          to="/"
          className="btn btn-ghost border-none hover:bg-transparent text-xl font-bold"
          aria-label="Go to home page"
        >
          <img
            src={devLogo}
            alt="Max home logo"
            className="w-10 h-10 rounded-full"
          />
          Max
        </NavLink>
      </div>
      {user ? (
        <>
          <form
            onSubmit={handleSubmit}
            className="search-form flex-1 flex items-center text-base-content max-w-lg relative"
            aria-label="Search images"
          >
            <label htmlFor="image-search" className="sr-only">
              Search images
            </label>
            <FormInput
              id="image-search"
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search images"
              disabled={isLoading}
              className="outline-none border-base-300"
            />
            <button
              type="submit"
              aria-label="Search images"
              disabled={isLoading}
              className="btn absolute right-0 rounded-l-none"
            >
              <Icon icon={FaSearch} size={18} />
            </button>
          </form>
          <div className="dropdown dropdown-bottom">
            <button
              type="button"
              tabIndex={0}
              className="btn btn-sm mx-1"
              aria-label="Filter images"
            >
              Filter
            </button>
            <ul className="dropdown-content menu bg-base-100 text-base-content rounded-box z-1 w-52 p-2 shadow">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    type="button"
                    onClick={() => getImages(cat)}
                    className="capitalize"
                    aria-label={`Filter images by ${cat}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex ml-4 items-center">
            <div className="hidden md:flex w-20 items-center justify-around">
              <button
                className="btn btn-ghost btn-xs btn-circle"
                aria-label="Open settings"
              >
                <Icon icon={Settings} size={18} />
              </button>
              <button
                className="btn btn-ghost btn-xs btn-circle"
                aria-label="Open messages"
              >
                <Icon icon={MessageCircleWarning} size={18} />
              </button>
            </div>
            <div className="user" aria-label="User profile">
              {user?.profile?.avatar?.url ? (
                <img
                  src={user.profile.avatar.url}
                  className="h-8 w-8 rounded-full"
                  alt={`${user.firstName || "User"}'s profile`}
                />
              ) : (
                <div
                  className="text-base-content"
                  aria-label="Default profile icon"
                >
                  <Icon icon={UserCircle} />
                </div>
              )}
            </div>
            <button
              type="button"
              aria-label="Open navigation menu"
              onClick={onToggle}
              className="user ml-2 btn btn-ghost btn-sm md:hidden"
            >
              <Icon icon={Menu} />
            </button>
          </div>
        </>
      ) : (
        <div className="flex-none">
          <Link
            to="/login"
            className="btn btn-sm btn-ghost hover:btn-primary hover:text-primary-content capitalize"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="btn btn-sm btn-primary capitalize ml-2"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}
