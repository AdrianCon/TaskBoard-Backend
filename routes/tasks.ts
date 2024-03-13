import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Tasks default');
});

router.get('/:id', (req: Request, res: Response) => {
  res.send('Tasks by id');
});

module.exports = router;