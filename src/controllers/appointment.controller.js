import { prisma } from "../lib/prisma.js";

const getAppointments = async (req, res) => {
    const appointments = await prisma.appointment.findMany()
    res.json(appointments)
}

const getAppointmentById = async (req, res) => {
    const { id } = req.params
    const appointment = await prisma.appointment.findUnique({
        where: { id: Number(id) }
    })
    res.json(appointment)
}

const createAppointment = async (req, res) => {
    const newAppointment = await prisma.appointment.create({
        data: req.body
    })
    res.json(newAppointment)
}

const updateAppointment = async (req, res) => {
    const { id } = req.params
    const updatedAppointment = await prisma.appointment.update({
        where: { id: Number(id) },
        data: req.body
    })
    res.json(updatedAppointment)
}

const deleteAppointment = async (req, res) => {
    const { id } = req.params
    const deletedAppointment = await prisma.appointment.delete({
        where: { id: Number(id) }
    })
    res.status(204).json(deletedAppointment)
}

export { getAppointments, getAppointmentById, createAppointment, updateAppointment, deleteAppointment }