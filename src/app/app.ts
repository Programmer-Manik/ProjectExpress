import { error } from 'console'
import express, { NextFunction, Request, Response } from 'express'
const app = express()
const port = 3000
app.use(express.json())
app.use(express.text())
// Routing in express
const userRouting = express.Router();
const userPostRouter = express.Router();
app.use("/api/v1/users", userRouting);
app.use("/api/v1/course", userPostRouter)
userRouting.get(
  "/create-user",
  (req: Request, res: Response) => {
    const user = req.body;
    console.log(user)
    res.json({
      success: true,
      message: 'user data show ',
      data: user
    })
  }
)
userPostRouter.post(
  "/create-course",
  (req: Request, res: Response) => {
    const course = req.body;
    console.log(course)
    res.json({
      success: true,
      message: 'user data show ',
      data: course
    })
  }
)
//middleware 
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname)
  next()
}
///:useId/:subUser
// error catch system 
app.get('/', logger, async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send();
  } catch (error) {
    next(error)
    // res.status(400).json({
    //   success:false,
    //   message:'failed to get data',
    // })
  }
})
app.post('/', (req: Request, res: Response) => {
  console.log(req.body)
  res.json({
    message: 'success data pas'
  })
})
//all get And post error handler
app.all("*", (req, res) => {
  res.status(400).json({
    success: false,
    message: 'Route is not found',
  })
})
// global error handler 
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(400).json({
    success: false,
    message: 'something wrong ',
  })
})

export default app;
