const bcrypt = require("bcryptjs");
const { insertUser, getUser } = require('../db/user');
const { SECRET_KEY } = require('../config/env');
const jwt = require("jsonwebtoken");

const signup = async (req, reply) => {
    const { FirstName, LastName, UserName, Password, IsAdmin } = req.body
    const user = await getUser(UserName);
    if (user.length > 0) {
        reply.send({ message: `User already exits` });
    }
    else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(Password, salt);
        await insertUser({
            FirstName: FirstName, LastName: LastName, UserName: UserName, Password: hash, IsAdmin: IsAdmin
        });
        reply.send({ message: `User register has been successfully` })
    }
}


const login = async (req, reply) => {
    const { UserName, Password } = req.body;
    const users = await getUser(UserName);
    if (users.length == 1) {
        const user = users[0];
        const validPass = await bcrypt.compare(Password, user.PasswordHash);
        if (!validPass) return res.status(400).send("Password is invalid");

        const token = jwt.sign({ Id: user.Id }, SECRET_KEY, { expiresIn: "7d" });
        reply.send({ "token": token, Id: user.Id, IsAdmin: user.IsAdmin, UserName: user.UserName });
    }
}

module.exports = { signup, login }