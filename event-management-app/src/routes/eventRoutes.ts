import { Router } from 'express';
import { EventController } from '../controllers/eventController';

const router = Router();
const eventController = new EventController();

router.post('/events', eventController.createEvent);
router.get('/events', eventController.getAllEvents);

export default router;