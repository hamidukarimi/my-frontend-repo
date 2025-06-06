import React, { useEffect, useState } from "react";
const BASE_URL = import.meta.env.VITE_BASE_URL;

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all users from the API
    const fetchUsers = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/users/all`);
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("❌ Failed to fetch users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        All Users
      </h2>

      {loading ? (
        <p className="text-center text-gray-600">Loading users...</p>
      ) : users.length === 0 ? (
        <p className="text-center text-red-600">No users found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {users.map((user, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-200"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {user.name}
              </h3>
              <p className="text-gray-600">{user.email}</p>
              <p className="mt-2 text-sm text-gray-400">Password: {user.password}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Users;
