import { useEffect, useState } from 'react';
import { apiUrl, extractItems } from '../config/api';

function Leaderboard() {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(apiUrl('leaderboard'))
      .then((response) => response.json())
      .then((data) => setEntries(extractItems(data)))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="container py-4">
      <h1>Leaderboard</h1>
      {error && <p className="text-danger">Failed to load leaderboard: {error}</p>}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={entry._id || entry.id || index}>
              <td>{index + 1}</td>
              <td>{entry.name}</td>
              <td>{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
