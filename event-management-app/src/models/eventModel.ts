import { Schema, model } from 'mongoose';

const eventSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        validate: {
            validator: function(value: Date) {
                return value > new Date();
            },
            message: 'Event date must be in the future.',
        },
    },
});

const Event = model('Event', eventSchema);

export default Event;