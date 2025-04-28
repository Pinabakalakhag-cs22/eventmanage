import { Registration } from '../models/registrationModel';
import { Event } from '../models/eventModel';
import { User } from '../models/userModel';

export class RegistrationService {
    async registerUserForEvent(userId: string, eventId: string): Promise<Registration> {
        const existingRegistration = await Registration.findOne({ userId, eventId });
        if (existingRegistration) {
            throw new Error('User is already registered for this event.');
        }

        const registration = new Registration({ userId, eventId });
        return await registration.save();
    }

    async getUserRegistrations(userId: string): Promise<Registration[]> {
        return await Registration.find({ userId }).populate('eventId');
    }

    async removeUserRegistration(userId: string, eventId: string): Promise<void> {
        const result = await Registration.deleteOne({ userId, eventId });
        if (result.deletedCount === 0) {
            throw new Error('No registration found for this user and event.');
        }
    }
}