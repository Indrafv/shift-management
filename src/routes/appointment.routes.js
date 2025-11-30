import { Router } from 'express'
import { getAppointments, getAppointmentById, createAppointment, updateAppointment, deleteAppointment } from "../controllers/appointment.controller.js";

const router = Router()


router.get('/appointments', getAppointments)

router.post('/appointments', createAppointment)

router.get('/appointments/:id', getAppointmentById)
router.put('/appointments/:id', updateAppointment)
router.delete('/appointments/:id', deleteAppointment)

export default router;