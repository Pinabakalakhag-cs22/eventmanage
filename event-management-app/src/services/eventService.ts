import { Event } from '../models/eventModel';

export class EventService {
    async saveEvent(eventData: Partial<Event>): Promise<Event> {
        const event = new Event(eventData);
        return await event.save();
    }

    async fetchAllEvents(): Promise<Event[]> {
        return await Event.find();
    }

    async findEventById(eventId: string): Promise<Event | null> {
        return await Event.findById(eventId);
    }

    async updateEvent(eventId: string, updateData: Partial<Event>): Promise<Event | null> {
        return await Event.findByIdAndUpdate(eventId, updateData, { new: true });
    }

    async deleteEvent(eventId: string): Promise<Event | null> {
        return await Event.findByIdAndDelete(eventId);
    }
}