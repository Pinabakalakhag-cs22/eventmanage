import { Router } from 'express';
import { RegistrationController } from '../controllers/registrationController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();
const registrationController = new RegistrationController();

router.post('/register', authMiddleware, registrationController.registerForEvent);
router.get('/user-events', authMiddleware, registrationController.getUserEvents);
router.delete('/cancel/:registrationId', authMiddleware, registrationController.cancelRegistration);

export default router;