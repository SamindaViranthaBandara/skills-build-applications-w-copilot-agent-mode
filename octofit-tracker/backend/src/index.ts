import express from 'express';
import cors from 'cors';
import './config/database';
import { apiBaseUrl, port } from './config/server';
import activitiesRouter from './routes/activities';
import leaderboardRouter from './routes/leaderboard';
import teamsRouter from './routes/teams';
import usersRouter from './routes/users';
import workoutsRouter from './routes/workouts';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutsRouter);

app.get('/api/health', (_req, res) => {
  res.json({ apiBaseUrl, status: 'ok' });
});

app.listen(port, () => {
  console.log(`Octofit Tracker API listening at ${apiBaseUrl}`);
});
