import { Outlet } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h1>Header components</h1>
      <Outlet />
    </div>
  );
}
