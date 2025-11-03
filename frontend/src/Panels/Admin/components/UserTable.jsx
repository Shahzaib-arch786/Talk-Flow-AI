import React from "react";
import UserRow from "./UserRow";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

const users = [
  { name:"Alex Johnson", email:"alex.j@example.com", role:"Admin", status:"Active", lastLogin:"2 days ago", image:"https://i.pravatar.cc/40?img=1"},
  { name:"Brenda Smith", email:"brenda.s@example.com", role:"Agent", status:"Active", lastLogin:"5 hours ago", image:"https://i.pravatar.cc/40?img=2"},
  { name:"Charlie Brown", email:"charlie.b@example.com", role:"Agent", status:"Invited", lastLogin:"Never", image:"https://i.pravatar.cc/40?img=3"},
  { name:"Diana Prince", email:"diana.p@example.com", role:"Viewer", status:"Active", lastLogin:"1 week ago", image:"https://i.pravatar.cc/40?img=4"},
  { name:"Ethan Hunt", email:"ethan.h@example.com", role:"Agent", status:"Suspended", lastLogin:"1 month ago", image:"https://i.pravatar.cc/40?img=5"},
];

const UserTable = () => {
  return (
    <div className="w-full bg-gray-900 rounded-xl shadow-lg p-4 sm:p-6 overflow-x-auto border border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white">User Management</h2>
        <Link to="/AD/users/add" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium">
          Add User
        </Link>
      </div>

      <table className="w-full min-w-[700px] text-left text-sm text-gray-300">
        <thead className="border-b border-gray-800 uppercase text-gray-400 text-xs">
          <tr>
            <th className="p-3"><input type="checkbox" className="accent-blue-600" /></th>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Role</th>
            <th className="p-3">Status</th>
            <th className="p-3">Last Login</th>
            <th className="p-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <UserRow key={i} user={u} />
          ))}
        </tbody>
      </table>

      <div className="mt-4">
        <Pagination />
      </div>
    </div>
  );
};

export default UserTable;
