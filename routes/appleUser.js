const express= require('express');
const router= express.Router();
const fs = require('fs')

const APPLEUSERS_FILE= './data/appleUsers.json'


// Get Users Listing
router.get('/', (req,res) => {
    fs.readFile(APPLEUSERS_FILE, 'utf8', (err,data) => {
        if(err){
            console.log(err)
            res.status(404).send('Having a hard time reading this page')
            return;
        }
        res.json(JSON.parse(data));
    }) 
});
// GET a basket by its id
router.get ('/:id', (req,res) => {
    fs.readFile(APPLEUSERS_FILE, 'utf8', (err,data) => {
        if(err){
            console.log(err)
            res.status(404).send('Having a hard time reading this page')
            return;
        }
        const aUsers=JSON.parse(data)
        const aUser=aUsers.find(aUser => aUser.id ===parseInt(req.params.id ))
        console.log(aUser)
        console.log(req.params)
        if(!aUser) {
            res.status(404).send('User not found')
            return;
        }
        res.json(aUser)
    })
})

module.exports = router;