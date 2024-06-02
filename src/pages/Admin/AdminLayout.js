import { Outlet } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";

const AdminLayout = () => {
    return ( 
        <div className="dashboard">
        <AdminSidebar />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
     );
}
 
export default AdminLayout;