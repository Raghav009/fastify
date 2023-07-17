const { executeServerQuery } = require('./sqlserver');

const insertUser = async (user) => {
    let query = `insert into [dbo].[Users](FirstName,LastName,UserName,IsAdmin,PasswordHash) values ('${user.FirstName}','${user.LastName}','${user.UserName}',${user.IsAdmin},N'${user.Password}')`
    const data = await executeServerQuery(query);
    return data.recordset; 
}

const getUser = async(userName) => {
    const user = await executeServerQuery(`select * from [dbo].[Users] where UserName = '${userName}'`);
    return user.recordset; 
}

module.exports = { insertUser, getUser }