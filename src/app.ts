// app.ts

import express, { Application, Request, Response } from "express"
import cors from "cors"
import postRoutes from "./app/modules/user/user.routes"
import userRoutes from "./app/modules/user/user.routes"

const app:Application = express()

// parser
app.use(express.json())
app.use(cors())
// routes
app.use("/api/users", userRoutes);
app.use('/api/posts', postRoutes);

app.get('/',(req:Request,res:Response)=>{
    res.send(`Gardening platform server is online now..
         welcome to green world`)
});


export default app;