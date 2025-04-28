export interface Registration {
    userId: string;
    eventId: string;
    registrationDate: Date;
}

export class RegistrationModel {
    private registrations: Registration[] = [];

    public registerUserForEvent(userId: string, eventId: string): boolean {
        const existingRegistration = this.registrations.find(reg => reg.userId === userId && reg.eventId === eventId);
        if (existingRegistration) {
            return false; // Duplicate registration
        }
        const newRegistration: Registration = {
            userId,
            eventId,
            registrationDate: new Date(),
        };
        this.registrations.push(newRegistration);
        return true;
    }

    public getUserEvents(userId: string): Registration[] {
        return this.registrations.filter(reg => reg.userId === userId);
    }

    public cancelRegistration(userId: string, eventId: string): boolean {
        const index = this.registrations.findIndex(reg => reg.userId === userId && reg.eventId === eventId);
        if (index === -1) {
            return false; // Registration not found
        }
        this.registrations.splice(index, 1);
        return true;
    }
}