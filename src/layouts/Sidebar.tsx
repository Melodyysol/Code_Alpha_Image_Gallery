import { NavLink } from "react-router";
import { motion } from "motion/react";

import { Icon } from "../components";
import {
  Bookmark,
  ChevronRight,
  LayoutGrid,
  LogOut,
  MessageSquare,
  PanelLeftClose,
  PanelRightClose,
  Settings,
  UserCircle,
  X,
} from "lucide-react";
import { devLogo } from "../utilities/images";
import { useState } from "react";
import { UseAuth, UseUtilities } from "../custom-hooks";
import { MdWebAsset } from "react-icons/md";

const links = [
  { label: "Dashboard", icon: LayoutGrid, to: "/dashboard" },
  { label: "Assets", icon: MdWebAsset, to: "/assets" },
  { label: "Bookmark", icon: Bookmark, to: "/bookmark" },
  { label: "Messages", icon: MessageSquare, to: "/messages", badge: "3" },
  { label: "Settings", icon: Settings, to: "/settings" },
];
export default function Sidebar() {
  const [showPanel, setShowPanel] = useState(false);
  const { collapsed, onToggle } = UseUtilities();

  return (
    <>
      {/* Desktop */}

      <aside
        aria-label="Desktop navigation"
        onMouseEnter={() => setShowPanel(true)}
        onMouseLeave={() => setShowPanel(false)}
        className={`fixed inset-y-0 top-15.5  ${collapsed ? "w-20 flex items-center" : "w-72"} bg-base-100 z-50 py-5 px-5 transition-all duration-300 hidden md:inline-block border-r-4 border-base-300`}
      >
        {
          <SidebarContent
            showPanel={showPanel}
            collapsed={collapsed}
            onToggle={() => onToggle()}
          />
        }
      </aside>

      {/* Mobile */}
      {collapsed && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={onToggle}
          className="overlay fixed inset-0 bg-neutral-900/30 z-40 md:hidden transition-all duration-300"
        />
      )}
      <aside
        aria-label="Mobile navigation"
        className={`fixed inset-y-0 w-72 bg-base-100 z-50 py-5 px-5 transition-all duration-300 md:hidden border-r-2 border-base-300 ${collapsed ? "translate-x-0" : "-translate-x-full"}`}
      >
        {<SidebarContent collapsed={collapsed} onToggle={() => onToggle()} />}
      </aside>
    </>
  );
}

function SidebarContent({
  collapsed,
  onToggle,
  showPanel = false,
}: {
  collapsed: boolean;
  onToggle: () => void;
  showPanel?: boolean;
}) {
  const { user, logOut } = UseAuth();

  return (
    <>
      {/* Collapse Desktop */}
      {showPanel && (
        <motion.button
          type="button"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          onClick={onToggle}
          className="btn bg-base-100 border-none absolute top-[50%] -right-12 hidden md:flex"
        >
          {collapsed ? (
            <Icon icon={PanelRightClose} size={36} />
          ) : (
            <Icon icon={PanelLeftClose} size={36} />
          )}
        </motion.button>
      )}
      {/* Header */}
      <div className="flex items-center justify-between md:hidden">
        <div className="flex items-center gap-2">
          <img
            src={devLogo}
            alt="Max logo"
            className="rounded-full w-10 h-10"
          />
          {!collapsed && <span className="font-bold text-xl">Max</span>}
        </div>
        <button
          type="button"
          aria-label="Close navigation menu"
          className="cursor-pointer hover:text-neutral-600 text-neutral-400 transition-all duration-300 md:hidden "
          onClick={onToggle}
        >
          <Icon icon={X} />
        </button>
      </div>
      {/* Routes */}
      {/* Mobile list */}
      <ul className="menu py-5 gap-4 w-full md:hidden">
        {links.map((item) => (
          <NavLink
            to={item.to}
            key={item.label}
            className={({ isActive }) =>
              `flex justify-start ${isActive ? "btn btn-primary btn-soft" : "btn btn-ghost"}`
            }
          >
            <Icon icon={item.icon} />
            <span className="flex-1 text-start">{item.label}</span>
            {item.badge && (
              <span className="badge badge-primary badge-sm">{item.badge}</span>
            )}
          </NavLink>
        ))}
      </ul>
      {/* Desktop list */}
      <ul
        className={`py-5 gap-4 w-full hidden md:flex flex-col ${collapsed && "items-center"}`}
      >
        {links.map((item) => (
          <NavLink
            to={item.to}
            key={item.label}
            className={({ isActive }) =>
              `flex justify-start ${isActive ? "btn btn-primary btn-soft" : "btn btn-ghost"}`
            }
          >
            <div className="tooltip-bottom" data-tip={item.label}>
              <Icon icon={item.icon} />
            </div>
            {!collapsed && (
              <span className="flex-1 text-start">{item.label}</span>
            )}
            {item.badge && !collapsed && (
              <span className="badge badge-primary badge-sm">{item.badge}</span>
            )}
          </NavLink>
        ))}
      </ul>
      <hr className="border border-base-300 mt-auto" />
      {/* User */}
      <div className="py-5 space-y-3">
        <h3 className={`${collapsed ? "hidden" : "font-semibold"}`}>
          My Profile
        </h3>
        <div className="flex items-center justify-between">
          <div
            className={`flex items-center gap-2 flex-row ${collapsed && "md:flex-col"}`}
          >
            {user?.profile?.avatar?.url ? (
              <img
                src={user.profile.avatar.url}
                className="h-8 w-8 rounded-full"
                alt={`${user?.firstName || "User"}'s profile`}
              />
            ) : (
              <div
                className="text-base-content"
                aria-label="Default profile icon"
              >
                <Icon icon={UserCircle} />
              </div>
            )}
            <div className="flex flex-col text-sm md:hidden">
              <span className="font-semibold">
                {user?.firstName?.slice(0, 4)}..
              </span>
              <span className={`text-neutral-400 text-xs`}>{user?.email}</span>
            </div>
            <div className="flex-col text-sm hidden md:flex">
              <span className="font-semibold">
                {user?.firstName?.slice(0, 4)}..
              </span>
              <span className={`text-neutral-400 text-xs`}>
                {!collapsed && user?.email}
              </span>
            </div>
          </div>
          <button
            type="button"
            aria-label="Open profile"
            className={`cursor-pointer hover:text-neutral-600 text-neutral-400 transition-all duration-300 block ${collapsed && "md:hidden"}`}
          >
            <Icon icon={ChevronRight} />
          </button>
        </div>
      </div>

      {/* Logout */}
      <button
        type="button"
        onClick={logOut}
        aria-label="Log out"
        className={`btn btn-ghost hover:bg-error absolute bottom-8 md:hidden`}
      >
        <Icon icon={LogOut} />
        <span>Log out</span>
      </button>

      <button
        type="button"
        onClick={logOut}
        aria-label="Log out"
        className={`btn btn-ghost hover:bg-error absolute bottom-8 hidden md:flex left-2`}
      >
        <Icon icon={LogOut} />
        {!collapsed && <span>Log out</span>}
      </button>
    </>
  );
}
