import { connect } from 'mongoose'

export default connect(
    'mongodb://localhost/grapgql_practice', 
    {
        useNewUrlParser:true
    }, (err) => {
        if(!err) {
            console.log("Data base connected")
        }else {
            console.log(`Error connecting to DB: ${err}`)
        }
    })