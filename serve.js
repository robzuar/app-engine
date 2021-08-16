const express = require( 'express' );
const dotenv = require( 'dotenv' );
const morgan = require( 'morgan' );
const errorHandler = require( './middleware/error' );
const connectDb = require('./config/db');

//Load env vars
dotenv.config( { path: './config/config.' + process.env.NODE_ENV + '.env' } );
console.log( 'vendors : ' + process.env.VENDORS );

//Connect to database
connectDb();

//Routes files
const events = require('./routes/events');

const app = express();

//Body parser
app.use(express.json());

//Dev logging middleware
if(process.env.NODE_ENV === 'dev'){
    app.use(morgan('dev'));
}

//Mount routers
app.use('/api/events', events);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const server = app.listen( PORT, console.log( `Server running in ${ process.env.NODE_ENV } mode on port ${ PORT } `.yellow.bold ) );

//Handle  unhandled promise rejections
process.on( 'unhandledRejection', ( err, promise ) => {
        console.log(`Error: ${ err.message }`);
        //Close server & exit process
        server.close( () => process.exit( 1 ) );
    }
);