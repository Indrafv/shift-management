// src/models/appointment.model.js
import { prisma } from "../lib/prisma.js";

export const AppointmentModel = {
    getAppointments() {
        return prisma.appointment.findMany();
    },

    getAppointmentById(id) {
        return prisma.appointment.findUnique({
            where: { id: Number(id) }
        });
    },

    getByEmail(email) {
        return prisma.appointment.findUnique({
            where: { email }
        });
    },

    appointmentCreate(data) {
        return prisma.appointment.create({
            data
        });
    },

    appointmentUpdate(id, data) {
        return prisma.appointment.update({
            where: { id: Number(id) },
            data
        });
    },

    appointmentDelete(id) {
        return prisma.appointment.delete({
            where: { id: Number(id) }
        });
    }
};
