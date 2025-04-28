export interface User {
    id: string;
    username: string;
    password: string;
}

export interface Event {
    id: string;
    title: string;
    description: string;
    date: Date;
}

export interface Registration {
    id: string;
    userId: string;
    eventId: string;
}