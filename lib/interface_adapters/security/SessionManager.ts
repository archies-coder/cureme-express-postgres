import session from 'express-session'
// eslint-disable-next-line no-unused-vars
import redis from 'connect-redis'

const SessionManager = (store: redis.RedisStore) => {
  const sessionOptions = {
    secret: 'dsfjkbdkfdlfdjlsfilodshl',
    store: store,
    resave: false,
    saveUninitialized: false
  }

  return session(sessionOptions)
}

export default SessionManager