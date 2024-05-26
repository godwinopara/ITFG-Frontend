import { Navigate, Outlet } from "react-router-dom";

export default function AdminProtectedRoutes() {
	const localStorageToken = localStorage.getItem("adminToken");

	return localStorageToken ? <Outlet /> : <Navigate to="/admin/signin" replace />;
}
