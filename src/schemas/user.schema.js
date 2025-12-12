import z from 'zod'

const userSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    lastName: z.string().min(1, 'Last name is required').optional().nullable(),
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
    role: z.enum(['admin', 'user', 'manager'], 'Role must be either admin, user, or manager'),

})

function validateUser(data) {
    return userSchema.safeParse(data)
}

function validatePartialUser(data) {
    return userSchema.partial().safeParse(data)
}

export { validateUser, validatePartialUser }