const express= require('express');
const router= express.Router();
const fs = require('fs')


const APPLEALBUMS_FILE='./data/appleAlbums.json'

// Get Album Lisitng
router.get('/',(req,res) => {
    fs.readFile(APPLEALBUMS_FILE, 'utf8', (err,data) =>{
        if (err){
            console.log(err)
            res.status(500).send('Having a hard time reading this file')
            return;
        }
        res.json(JSON.parse(data));
    })

});

router.get ('/:id', (req,res) => {
  fs.readFile(APPLEALBUMS_FILE, 'utf8', (err,data) => {
      if(err){
          console.log(err)
          res.status(404).send('Having a hard time reading this page')
          return;
      }
      const aMusic =JSON.parse(data)
      const Music=aMusic.find(Music => Music.id ===parseInt(req.params.id ))
      console.log(Music)
      console.log(req.params)
      if(!Music) {
          res.status(404).send('User not found')
          return;
      }
      res.json(Music)
  })
})


module.exports = router;
