import { NavLink } from "react-router-dom";
import { Typography } from "../../component/Typography/Typography";
import "./sidebar.css";
export const SideBar = (): JSX.Element => (
  <>
    <div className="sidebar-container">
      <NavLink
        to="/avatar"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "navPending"
        }
      >
        <Typography variant="sidebar">Avatar</Typography>
      </NavLink>

      <NavLink
        to="/alert"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "navPending"
        }
      >
        <Typography variant="sidebar">Alert</Typography>
      </NavLink>

      <NavLink
        to="/badge"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "navPending"
        }
      >
        <Typography variant="sidebar">Badge</Typography>
      </NavLink>

      <NavLink
        to="/button"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "navPending"
        }
      >
        <Typography variant="sidebar">Button</Typography>
      </NavLink>

      <NavLink
        to="/card"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "navPending"
        }
      >
        <Typography variant="sidebar">Card</Typography>
      </NavLink>

      <NavLink
        to="/image"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "navPending"
        }
      >
        <Typography variant="sidebar">Image</Typography>
      </NavLink>
      <NavLink
        to="/input"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "navPending"
        }
      >
        <Typography variant="sidebar">Input</Typography>
      </NavLink>

      <NavLink
        to="/textUtils"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "navPending"
        }
      >
        <Typography variant="sidebar">Text Utilities</Typography>
      </NavLink>

      <NavLink
        to="/list"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "navPending"
        }
      >
        <Typography variant="sidebar">List</Typography>
      </NavLink>

      <NavLink
        to="/navbar"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "navPending"
        }
      >
        <Typography variant="sidebar">Navigation</Typography>
      </NavLink>

      <NavLink
        to="/modal"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "navPending"
        }
      >
        <Typography variant="sidebar">Modal</Typography>
      </NavLink>

      <NavLink
        to="/grid"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "navPending"
        }
      >
        <Typography variant="sidebar">Grid</Typography>
      </NavLink>
    </div>
  </>
);
