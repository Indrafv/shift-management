import {  } from "../models/appointment.model.js"
import { validateAppointment, validatePartialAppointment } from "../schemas/appointment.schema.js";
export const getAppointments = async (req, res) => {
    const appointments = await AppointmentModel.getAppointments()
    res.json(appointments)
}

export const getAppointmentById = async (req, res) => {
    const { id } = req.params
    const appointment = await AppointmentModel.getAppointmentById(id)
    res.json(appointment)
}

export const createAppointment = async (req, res) => {
    

    const result = validateAppointment(req.body);
    if (result.error) {
        return res.status(400).json({ error: result.error.message });
    }

    const newAppointment = await AppointmentModel.appointmentCreate(req.body);
    res.json(newAppointment)
}

export const updateAppointment = async (req, res) => {
    const result = validatePartialAppointment(req.body);
    if (result.error) {
        return res.status(400).json({ error: result.error.message });
    }
    const { id } = req.params
    const updatedAppointment = await AppointmentModel.appointmentUpdate(id, req.body)
    res.json(updatedAppointment)
}

export const deleteAppointment = async (req, res) => {
    const { id } = req.params
    const deletedAppointment = await AppointmentModel.appointmentDelete(id)
    res.status(204).json(deletedAppointment)
}

