const fs = require('fs');
function saveUser(username,email,password)
{
    try{
        const json = {
            username,
            email,
            password
        };
        var jsonString = JSON.stringify(json);
        fs.writeFileSync('../users.json', jsonString);
    }catch(error){
        console.log('error',error);

    }
}
module.exports=saveUser;