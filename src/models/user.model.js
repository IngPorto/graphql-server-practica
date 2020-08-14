import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
    name: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: Number, required: true},
    age: Number
})

export default model('User', UserSchema)