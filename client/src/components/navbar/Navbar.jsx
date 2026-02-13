import { useContext, useState, useEffect } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNotificationStore } from "../../lib/notificationStore";
import { createPortal } from "react-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const fetch = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.number);

  useEffect(() => {
    if (currentUser) fetch();
  }, [currentUser, fetch]);

  return (
    <>
      <nav>
        <div className="left">
          <a href="/" className="logo">
            <img src="/logo.png" alt="" />
            <span>Rayan State</span>
          </a>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/agents">Agents</a>
        </div>
        <div className="right">
          {currentUser ? (
            <div className="user">
              <img src={currentUser.avatar || "/noavatar.png"} alt="" />
              <span>{currentUser.username}</span>
              <Link to="/profile" className="profile">
                {number > 0 && <div className="notification">{number}</div>}
                <span>Profile</span>
              </Link>
            </div>
          ) : (
            <>
              <Link to="/login">Sign in</Link>
              <Link to="/register" className="register">
                Sign up
              </Link>
            </>
          )}
          <div className="menuIcon">
            <img
              src="/menu.png"
              alt="menu"
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
        </div>
      </nav>
      {typeof document !== "undefined" &&
        createPortal(
          <div
            className={open ? "menu active" : "menu"}
            onClick={(e) => {
              // close when clicking on overlay (outside .menuInner)
              if (e.target === e.currentTarget) setOpen(false);
            }}
          >
            <div className="menuInner">
              <div className="menuLinks">
                <Link to="/" onClick={() => setOpen(false)}>
                  Home
                </Link>
                <Link to="/about" onClick={() => setOpen(false)}>
                  About
                </Link>
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Contact
                </Link>
                <Link to="/agents" onClick={() => setOpen(false)}>
                  Agents
                </Link>
                <Link to="/login" onClick={() => setOpen(false)}>
                  Sign in
                </Link>
                <Link to="/register" onClick={() => setOpen(false)}>
                  Sign up
                </Link>
              </div>

              {currentUser && (
                <div
                  className="menuFooter"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <img
                    src={currentUser.avatar || "/noavatar.png"}
                    alt="avatar"
                  />
                  <Link to="/profile">{currentUser.username || "Profile"}</Link>
                </div>
              )}
            </div>
          </div>,
          document.body,
        )}
      {/* end portal */}
    </>
  );
}

export default Navbar;
