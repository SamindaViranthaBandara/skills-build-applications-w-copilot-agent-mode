import { useEffect, useState } from 'react';
import { API_BASE_URL, extractItems } from '../config/api';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState(null);
  const endpoint = '/api/teams/';

  useEffect(() => {
    fetch(`${API_BASE_URL}${endpoint}`)
      .then((response) => response.json())
      .then((data) => setTeams(extractItems(data)))
      .catch((err) => setError(err.message));
  }, [endpoint]);

  return (
    <div className="container py-4">
      <h1>Teams</h1>
      {error && <p className="text-danger">Failed to load teams: {error}</p>}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Members</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team._id || team.id}>
              <td>{team.name}</td>
              <td>{team.members?.length ?? 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Teams;
