import { Router } from 'express'
import UserController from './controllers/UserController'
import CampaignController from './controllers/CampaignController';
import DonateController from './controllers/DonateController';

const routes = Router();

routes.get('/user', UserController.index)
routes.post('/user', UserController.create)


routes.get('/campaign', CampaignController.index)
routes.post('/campaign', CampaignController.create)
routes.put('/campaign/:id', CampaignController.update)
routes.delete('/campaign/:id', CampaignController.destroy)

routes.get('/donate', DonateController.index)
routes.post('/donate?', DonateController.create)

export default routes;