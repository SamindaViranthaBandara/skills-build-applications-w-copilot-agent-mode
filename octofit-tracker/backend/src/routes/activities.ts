import { Router } from 'express';

const activitiesRouter = Router();

activitiesRouter.get('/', (_req, res) => {
  res.json({ activities: [] });
});

export default activitiesRouter;