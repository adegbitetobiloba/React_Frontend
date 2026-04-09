import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="layout">

      <Sidebar />

      <div className="main">

        <h1>Dashboard</h1>

        <div className="card">
          <h3>Total Students</h3>
          <p>500+</p>
        </div>

        <div className="card">
          <h3>Active Courses</h3>
          <p>12</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;