import { prisma } from "../lib/prisma.js";

const getUsers = async (req, res) => {
    const users = await prisma.user.findMany()
    res.json(users)
}

const getUserById = async (req, res) => {
    const { id } = req.params
    const user = await prisma.user.findUnique({
        where: { id: Number(id) }
    })
    res.json(user)
}

const createUser = async (req, res) => {
    const newUser = await prisma.user.create({
        data: req.body
    })
    res.json(newUser)
}

const updateUser = async (req, res) => {
    const { id } = req.params
    const updatedUser = await prisma.user.update({
        where: { id: Number(id) },
        data: req.body
    })
    res.json(updatedUser)
}

const deleteUser = async (req, res) => {
    const { id } = req.params
    await prisma.user.delete({
        where: { id: Number(id) }
    })
    res.status(204).end()
}

export { getUsers, getUserById, createUser, updateUser , deleteUser }