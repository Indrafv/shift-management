import { UserModel } from "../models/user.model.js"
import { validateUser, validatePartialUser } from "../schemas/user.schema.js"

export const getUsers = async (req, res, next) => {
  try {
    const users = await UserModel.getUsers()
    res.json(users)
  } catch (error) {
    next(error)
  }
}

export const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await UserModel.getById(id)

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    res.json(user)
  } catch (error) {
    next(error)
  }
}

export const getEmailUnique = async (req, res, next) => {
  try {
    const { email } = req.params
    const user = await UserModel.getByEmail(email)
    res.json(user)
  } catch (error) {
    next(error)
  }
}

export const createUser = async (req, res, next) => {
  try {
    const emailExists = await UserModel.getByEmail(req.body.email)
    if (emailExists) {
      return res.status(400).json({ error: 'Email already in use' })
    }

    const result = validateUser(req.body)
    if (result.error) {
      return res.status(400).json({ error: result.error.message })
    }

    const newUser = await UserModel.create(req.body)
    res.status(201).json(newUser)
  } catch (error) {
    next(error)
  }
}

export const updateUser = async (req, res, next) => {
  try {
    const result = validatePartialUser(req.body)
    if (result.error) {
      return res.status(400).json({ error: result.error.message })
    }

    const { id } = req.params
    const user = await UserModel.update(id, req.body)
    res.json(user)
  } catch (error) {
    next(error)
  }
}

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await UserModel.getById(id)

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    await UserModel.delete(id)
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
}
