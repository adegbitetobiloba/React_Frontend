import { getUser, logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const user = getUser();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <div>

      <h1>Welcome {user?.firstName}</h1>

      <p>Role: {user?.role}</p>

      {user?.role === "visitor" && (
        <p>Limited access mode</p>
      )}

      <button onClick={handleLogout}>Logout</button>

    </div>
  );
}

export default Dashboard;
