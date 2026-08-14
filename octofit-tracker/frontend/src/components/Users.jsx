import { useEffect, useState } from 'react';
import { API_BASE_URL, extractItems } from '../config/api';

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const endpoint = '/api/users/';

  useEffect(() => {
    fetch(`${API_BASE_URL}${endpoint}`)
      .then((response) => response.json())
      .then((data) => setUsers(extractItems(data)))
      .catch((err) => setError(err.message));
  }, [endpoint]);

  return (
    <div className="container py-4">
      <h1>Users</h1>
      {error && <p className="text-danger">Failed to load users: {error}</p>}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id || user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
