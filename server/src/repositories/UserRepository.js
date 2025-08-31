const mongoose = require("mongoose");
const User = require("../models/User");


class UserRepository {
    static async findAllUsers() {
        const users = await User.find()
        return users;
    }
}

module.exports = UserRepository