import { Router } from 'express';

const workoutsRouter = Router();

workoutsRouter.get('/', (_req, res) => {
  res.json({ workouts: [] });
});

export default workoutsRouter;