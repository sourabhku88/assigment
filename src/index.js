const express = require('express');
const { ENV } = require('./config/env');
const { connectDB } = require('./config/db');
const { routes } = require('./routers/index');
const { notFoundError } = require('./util/response');


const app = express();

//middleware's
app.use(express.json())
routes(app)



// invalid API
app.use('*', (_, res) => notFoundError(res, 'API NOT FOUND!'))

app.listen(ENV.PORT, async () => {
    await connectDB()
    console.log(`server running on ${ENV.PORT}`)
})
