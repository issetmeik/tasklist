import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';
import requestLogger from './app/middlewares/requestLogger';
import UserController from './app/controllers/UserController';
import TaskController from './app/controllers/TaskController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();
routes.use(requestLogger);

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);

//Need auth
routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.post('/tasks', TaskController.store);
routes.get('/tasks', TaskController.index);
routes.put('/tasks/:id', TaskController.update);
routes.delete('/tasks/:id', TaskController.delete);

export default routes;
