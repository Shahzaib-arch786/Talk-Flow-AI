import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import TenantManagement from "./pages/TenantManagement";
import CallLogs from "./pages/CallLogs";
import AIModelManagement from "./pages/AIModelManagement";
import ModelTraining from "./pages/ModelTraining";
import SystemSettings from "./pages/SystemSettings";
import SupportTickets from "./pages/SupportTickets";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/AD" element={<Dashboard />} />
      <Route path="/AD/users" element={<UserManagement />} />
      <Route path="/AD/tenant" element={<TenantManagement />} />
      <Route path="/AD/calls" element={<CallLogs />} />
      <Route path="/AD/aimodels" element={<AIModelManagement />} />
      <Route path="/AD/modeltraining" element={<ModelTraining />} />
      <Route path="/AD/settings" element={<SystemSettings />} />
      <Route path="/AD/support" element={<SupportTickets />} />
    </Routes>
  );
}
