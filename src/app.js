import express, { json } from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import appointmentRoutes from "./routes/appointment.routes.js";

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api', userRoutes)
app.use('/api', appointmentRoutes)

app.listen(3000)
console.log(`Running at: http://localhost:3000`)