import { Request, Response } from 'express';
import RegistrationService from '../services/registrationService';

class RegistrationController {
    private registrationService: RegistrationService;

    constructor() {
        this.registrationService = new RegistrationService();
    }

    public registerForEvent = async (req: Request, res: Response) => {
        try {
            const { userId, eventId } = req.body;
            const registration = await this.registrationService.registerUserForEvent(userId, eventId);
            res.status(201).json({ message: 'Registration successful', registration });
        } catch (error) {
            res.status(500).json({ message: 'Registration failed', error: error.message });
        }
    };

    public getUserEvents = async (req: Request, res: Response) => {
        try {
            const userId = req.params.userId;
            const events = await this.registrationService.getUserRegisteredEvents(userId);
            res.status(200).json(events);
        } catch (error) {
            res.status(500).json({ message: 'Failed to retrieve events', error: error.message });
        }
    };

    public cancelRegistration = async (req: Request, res: Response) => {
        try {
            const { userId, registrationId } = req.body;
            await this.registrationService.removeUserRegistration(userId, registrationId);
            res.status(200).json({ message: 'Registration cancelled successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Cancellation failed', error: error.message });
        }
    };
}

export default RegistrationController;