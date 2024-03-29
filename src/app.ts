import express, { Application } from 'express'

import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import routers from './app/routes'

const app: Application = express()
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/', routers)

// testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//     throw new Error("Testing error logger")
// })

// global error handler
app.use(globalErrorHandler)

export default app
