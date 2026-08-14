import { useEffect, useState } from 'react';
import { apiUrl, extractItems } from '../config/api';

function Activities() {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState(null);
  const endpoint = apiUrl('activities');

  useEffect(() => {
    fetch(endpoint)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status} ${response.statusText}`);
        return response.json();
      })
      .then((data) => setActivities(extractItems(data)))
      .catch((err) => setError(err.message));
  }, [endpoint]);

  return (
    <div className="container py-4">
      <h1>Activities</h1>
      {error && <p className="text-danger">Failed to load activities: {error}</p>}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Type</th>
            <th>Duration</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <tr key={activity._id || activity.id}>
              <td>{activity.type}</td>
              <td>{activity.duration}</td>
              <td>{activity.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Activities;
