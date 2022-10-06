const User = require('../models/user')
const Sequelize = require('sequelize')



const createUserService = (data) => {
    //console.log(data)
    const user = User.create(data)
    return user
}

const getAllUsersService = () => {
    const users = User.findAll()
    return users
}
const getUserService = (user_mat) => {
    const user = User.findOne({where:{user_mat}})
    return user
}


module.exports = {createUserService, getAllUsersService, getUserService}