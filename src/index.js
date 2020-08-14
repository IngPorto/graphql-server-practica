import express from 'express'
import {graphqlHTTP} from 'express-graphql'
import schema from './schemas/typedefs'
import './database'

const app = express()

// Routes
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
}))

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), ()=>{
    console.log(`Servidor en el puerto ${app.get('port')}`)
})