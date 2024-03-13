import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

router.get('/:id', (req: Request, res: Response) => {
  res.send('Task info');
});

router.post('/', (req: Request, res: Response) => {
  res.send('Task added');
});

router.put('/:id', (req: Request, res: Response) => {
  res.send('Task updated');
});

module.exports = router;