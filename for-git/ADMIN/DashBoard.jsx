import { Link, Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
    
      <nav>
        <Link to='/Owners'>Owners</Link> | 
        <Link to='/CreateOwners'>CreateOwners</Link> |
        <Link to='/Products'>Products</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default Dashboard;
