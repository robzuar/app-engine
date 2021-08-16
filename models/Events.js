const mongoose = require( 'mongoose' );

const EventSchema = new mongoose.Schema(
    {
        identifier: { type: String },
        order_number: { type: String },
        tracking_number: { type: String },
        carrier_tracking_number: { type: String },
        carrier_name: { type: String }
    }
);

module.exports = mongoose.model( 'Event', EventSchema );

