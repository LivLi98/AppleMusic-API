# AppleMusic-API

This is a music API for apple Music to show differnt Albums and its' Users 

`/appleUsers` - GET
  -returns a list of all Users of Apple Music

`/appleUsers/:id` - GET
    - returns a single user by their ID 
- example response from `/appleUsers/3`:
```
   {
       "id":3,
       "firstName":"Danielle",
       "lastName":"Armon",
       "username":"MsDNice12",
       "password":"codersRUs56"
    }
```

`/appleUsers` - POST
- Accepts a `User` object
- example object:
```
{
       "id":3,
       "firstName":"Danielle",
       "lastName":"Armon",
       "username":"MsDNice12",
       "password":"codersRUs56"
    }
```



`/music` - GET
  -returns a list of some albums on Apple Music

`/music/:id` - GET
    - returns a single album by their ID 
- example response from `/music/3`:
```
  {
      "id": 3,
      "title": "thank u, next",
      "artist": "Ariana Grande",
      "year": 2019
    }
```

`/music/` - POST
 Accepts a `music` object
 - example object
```
  {
      "id": 3,
      "title": "thank u, next",
      "artist": "Ariana Grande",
      "year": 2019
    }




