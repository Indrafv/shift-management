// src/services/user.service.js
import { prisma } from "../lib/prisma.js";

export const UserModel = {
    getUsers() {
        return prisma.user.findMany();
    },

    getById(id) {
        return prisma.user.findUnique({
            where: { id: Number(id) }
        });
    },

    getByEmail(email) {
        return prisma.user.findUnique({
            where: { email }
        });
    },

    create(data) {
        return prisma.user.create({
            data
        });
    },

    update(id, data) {
        return prisma.user.update({
            where: { id: Number(id) },
            data
        });
    },

    delete(id) {
        return prisma.user.delete({
            where: { id: Number(id) }
        });
    }
};
