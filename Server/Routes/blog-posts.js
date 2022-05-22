const router = require('express').Router();
const database = require('../Database/database');

router.get('./blogposts', async (req, res)=> {
    try{
        await database.getBlogPosts().then(results => {
            console.log(results);
            if(!results) res.status(400);
            res.send(results.recordset);
        });
    }
    catch(error){
        console.log("Error getting /test: ", error);
        res.status(400);
    }
});

module.exports = router;