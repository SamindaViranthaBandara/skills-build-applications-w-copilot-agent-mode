import { useEffect, useState } from 'react';
import { apiUrl, extractItems } from '../config/api';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(apiUrl('workouts'))
      .then((response) => response.json())
      .then((data) => setWorkouts(extractItems(data)))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="container py-4">
      <h1>Workouts</h1>
      {error && <p className="text-danger">Failed to load workouts: {error}</p>}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout) => (
            <tr key={workout._id || workout.id}>
              <td>{workout.name}</td>
              <td>{workout.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Workouts;
