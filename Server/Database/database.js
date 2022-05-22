const sql = require("mssql");
const dotenv = require('dotenv');
dotenv.config();

var config = {
    "user": process.env.USER,
    "password": process.env.PASSWORD,
    "server": process.env.SERVER,
    "database": process.env.DATABASE,
    options:{
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        instancename: 'MSSQLSERVER'
    }
};

// get all carousel data
const getCarouselItems = async() => {
    try{
        console.log("Connecting");
        let pool = await sql.connect(config);
        let results = pool.request().query("select * FROM [dbo].[CarouselItem] WHERE OutOfUse != 1");
        console.log(results);
        return results;
    }
    catch(error){
        console.log("Error",  error);
        return null;
    }
}

// get all blog post data
const getBlogPosts = async() => {
    try{
        console.log("Connecting");
        let pool = await sql.connect(config);
        let results = pool.request().query("select * FROM [dbo].[BlogPost] WHERE OutOfUse != 1");
        console.log(results);
        return results;
    }
    catch(error){
        console.log("Error",  error);
        return null;
    }
}

// testing db call
const getObjects = async() => {
    try{
        console.log("Connecting");
        let pool = await sql.connect(config);
        let objects = pool.request().query("select * FROM test WHERE OutOfUse != 1")
        console.log(objects);
        return objects;
    }
    catch(error){
        console.log("Error",  error);
        return null;
    }
}


module.exports = {
    getObjects, getCarouselItems, getBlogPosts
}