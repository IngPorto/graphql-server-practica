import { Schema, model } from 'mongoose'

const TaskSchema = new Schema({
    title: String,
    description: String,
    number: Number
})

export default model('Task', TaskSchema)