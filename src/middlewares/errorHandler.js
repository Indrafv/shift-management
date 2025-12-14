export const errorHandler = (err, req, res, next) => {
  console.error(err) // 👈 log para ti

  res.status(500).json({
    error: 'Internal server error'
  })
}