import { Request, Response } from 'express';
import EventService from '../services/eventService';

class EventController {
    private eventService: EventService;

    constructor() {
        this.eventService = new EventService();
    }

    public createEvent = async (req: Request, res: Response): Promise<void> => {
        try {
            const eventData = req.body;
            const newEvent = await this.eventService.saveEvent(eventData);
            res.status(201).json(newEvent);
        } catch (error) {
            res.status(500).json({ message: 'Error creating event', error });
        }
    };

    public getAllEvents = async (req: Request, res: Response): Promise<void> => {
        try {
            const events = await this.eventService.fetchAllEvents();
            res.status(200).json(events);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving events', error });
        }
    };
}

export default EventController;