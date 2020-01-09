import connectRedis from 'connect-redis'
// eslint-disable-next-line no-unused-vars
import redis from 'redis'
import session from 'express-session'

export default class Store {
    RedisStore = connectRedis(session)
    RedisClient = redis.createClient()

    getStore(){
      return new this.RedisStore({
        host: 'localhost',
        port: 6379,
        client: this.RedisClient,
        ttl :  365*24*60*60
      })
    }
}

