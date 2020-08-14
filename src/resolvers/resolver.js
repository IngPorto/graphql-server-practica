import {tasks} from '../data/task'

export const resolvers = {
    Query: {
        hello: () => {
            return "Hello word with GraphQL"
        },
        greet(root, args) {
            return `Alo ${args.name}`
        },
        tasks() {
            return tasks
        }
    },
    Mutation: {
        createTask(root, args) {
            let newTask = args.input
            newTask._id = Math.floor(Math.random() * 10)
            //tasks.push(args.input)
            return newTask
        }
    }
}