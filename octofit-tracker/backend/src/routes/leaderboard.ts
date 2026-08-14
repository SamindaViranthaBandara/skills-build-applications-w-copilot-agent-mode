import { Router } from 'express';

const leaderboardRouter = Router();

leaderboardRouter.get('/', (_req, res) => {
  res.json({ leaderboard: [] });
});

export default leaderboardRouter;