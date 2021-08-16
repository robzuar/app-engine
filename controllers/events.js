const ErrorResponse = require( '../utils/errorResponse' )
const asyncHandler = require( '../middleware/async' );
const Event = require( '../models/Events' );


exports.getEvents = asyncHandler( async ( req, res ) => {
        const events = await Event.find();
        res.status( 200 ).json( { success: true, data: events } );
    }
);

exports.getEvent =  ( async ( req, res, next ) => {
        const event = await Event.findById( req.params.id );
        if ( !event ) return next( new ErrorResponse( `Event not found with id of ${req.params.id}` ), 404 );
        res.status( 200 ).json( { success: true, data: event } )
    }
);

