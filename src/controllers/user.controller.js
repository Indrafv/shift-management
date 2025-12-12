import { UserModel } from "../models/user.model.js"
import { validateUser, validatePartialUser } from "../schemas/user.schema.js"

export const getUsers = async (req, res) => {
    const users = await UserModel.getUsers();
    res.json(users);
};

export const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await UserModel.getById(id);
    res.json(user);
};

export const getEmailUnique = async (req, res) => {
    const { email } = req.params;
    const user = await UserModel.getByEmail(email);
    res.json(user);
};

export const createUser = async (req, res) => {
    const emailExists = await UserModel.getByEmail(req.body.email);
    if (emailExists) {
        return res.status(400).json({ error: 'Email already in use' });
    }

    const result = validateUser(req.body);
    if (result.error) {
        return res.status(400).json({ error: result.error.message });
    }

    const newUser = await UserModel.create(req.body);
    res.json(newUser);
};

export const updateUser = async (req, res) => {
    const result = validatePartialUser(req.body);
    if (result.error) {
        return res.status(400).json({ error: result.error.message });
    }

    const { id } = req.params;
    const user = await UserModel.update(id, req.body);
    res.json(user);
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    await UserModel.delete(id);
    res.status(204).end();
};
