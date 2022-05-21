const router = require('express').Router();
const database = require('../Database/database');

router.get('/carouselitems', async (req, res)=>{
    try{
        await database.getCarouselItems().then(results => {
            console.log(results);
            if(results == null) res.statusCode(404);
            res.send(results);
        });
    }
    catch(error){
        console.log("Error getting /carouselitems", error);
        res.status(400);
    }
});

module.exports = router;