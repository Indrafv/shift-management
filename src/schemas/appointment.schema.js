import z from "zod";

const appointmentSchema = z.object({
  date: z.string().datetime("Invalid date format"),
  description: z.string().optional(),
  paidWith: z.enum(['Efectivo', 'Tarjeta', 'Transferencia'], 'Payment method must be either Efectivo, Tarjeta, or Transferencia').optional(),
  amount: z.number().optional(),
  status: z.enum(['pending', 'confirmed', 'cancelled'], 'Status must be either pending, confirmed, or cancelled'),
  userId: z.number().int(),
});

function validateAppointment(data) {
    return appointmentSchema.safeParse(data)
}

function validatePartialAppointment(data) {
    return appointmentSchema.partial().safeParse(data)
}

export { validateAppointment, validatePartialAppointment }