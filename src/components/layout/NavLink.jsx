import { Link } from "react-router-dom";

export default function NavLink({ to, label, currentPath }) {
  const active = currentPath === to;

  return (
    <Link to={to} className={`nav-link ${active ? "nav-link-active" : ""}`}>
      {label}
    </Link>
  );
}
