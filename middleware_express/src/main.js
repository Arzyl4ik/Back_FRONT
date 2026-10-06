import app, { initDB } from './app.js'

initDB()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is running on http://localhost:3000')
    })
  })
