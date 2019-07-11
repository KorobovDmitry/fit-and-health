const mongoose = require('mongoose')
const Schema = mongoose.Schema

const completedTrainingSchema = new Schema({

})

module.exports = mongoose.model('completedTrainings', completedTrainingSchema)
