import * as express from 'express'

const router = express.Router()

router.get('/hello', (req, res): void => {
  console.log(req.sessionID)
  res.send('Hello')
})

export default router
