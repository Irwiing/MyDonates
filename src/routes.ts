import { Router } from 'express'
import UserController from './controllers/UserController'
import CampaignController from './controllers/CampaignController';
import DonateController from './controllers/DonateController';

const routes = Router();

routes.get('/login', UserController.index)
routes.post('/login', UserController.create)

routes.get('/campaign', CampaignController.index)
routes.post('/campaign', CampaignController.create)

routes.get('/donate', DonateController.index)
routes.post('/donate', DonateController.create)

export default routes;