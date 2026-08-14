import { Router } from 'express';

const teamsRouter = Router();

teamsRouter.get('/', (_req, res) => {
  res.json({ teams: [] });
});

export default teamsRouter;