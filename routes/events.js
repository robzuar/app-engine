const ErrorResponse = require( '../utils/errorResponse' );
const express = require( 'express' );
const { getEvents, getEvent } = require( '../controllers/events' );

const router = express.Router();

router.use( ( req, res, next ) => {
  const token = req.headers['access-token'];
        try {
          if( !token ) return next( new ErrorResponse( `no token provided` ), 404 );
          if( token !== process.env.TOKEN ) return next( new ErrorResponse( `token denied` ), 404 );
          next();
        } catch ( err ) {
          next( new ErrorResponse( `catch error` ), 404 );
        }
    }
);

router.route('/').get(getEvents);
router.route('/:id').get(getEvent);

module.exports = router;