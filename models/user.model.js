require("sequelize");

module.exports=(sequelize,type)=>{
    return sequelize.define("user",{
        
        email:{
            type:type.STRING,
            primaryKey:true,
        },
        password:{
            type:type.STRING
        }

    })
}
