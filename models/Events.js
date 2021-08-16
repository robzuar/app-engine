const mongoose = require( 'mongoose' );

const EventSchema = new mongoose.Schema(
    {
        identifier: { type: String },
        order_number: { type: String },
    }
);

module.exports = mongoose.model( 'Event', EventSchema );

