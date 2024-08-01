use("crudope")

db.createCollection("game")

// insert 

db.game.insertOne({
    Name:"Takken 3",
    size:"0gb",
    releasedate:"5may"

})

db.game.insertMany([
        {
            name: "Takken 3",
            size: "1.5GB",
            releaseDate: "1998-05-05",
            platform: "PlayStation",
            developer: "Namco"
        },
        {
            name: "Dragon Strike",
            size: "0GB",
            releaseDate: "2001-11-20",
            platform: "Xbox",
            developer: "Epic Games"
        },
        {
            name: "Mystic Quest",
            size: "1.2GB",
            releaseDate: "1999-09-15",
            platform: "PC",
            developer: "Square Enix"
        },
        {
            name: "Shadow Realm",
            size: "3.0GB",
            releaseDate: "2002-03-18",
            platform: "PlayStation 2",
            developer: "Capcom"
        },
        {
            name: "Galactic Heroes",
            size: "2.5GB",
            releaseDate: "2000-07-12",
            platform: "Nintendo 64",
            developer: "Nintendo"
        },
        {
            name: "Cyber Knights",
            size: "1.8GB",
            releaseDate: "2003-05-25",
            platform: "PC",
            developer: "Sega"
        },
        {
            name: "Legend of Aether",
            size: "2.7GB",
            releaseDate: "2004-10-10",
            platform: "PlayStation 2",
            developer: "Bandai Namco"
        },
        {
            name: "Phantom Blade",
            size: "1.9GB",
            releaseDate: "1997-11-11",
            platform: "PlayStation",
            developer: "Konami"
        },
        {
            name: "Star Defender",
            size: "2.2GB",
            releaseDate: "1998-06-30",
            platform: "Dreamcast",
            developer: "Sega"
        },
        {
            name: "Mystic Adventure",
            size: "1.6GB",
            releaseDate: "2001-04-07",
            platform: "Game Boy Color",
            developer: "Game Freak"
        }
    ])

// find 

let a=db.game.find({size:"1.6GB"})
console.log(a.toArray())//for creating array like structure

let b=db.game.findOne({size:"2.2GB"})
console.log(b)

// update  
db.game.updateOne({size:"2.2"},{$set:{size:"2.6"}})

db.game.update({size:"0GB"},{$set:{size:"6gb"}})

// delete 

db.game.deleteOne({size:"6gb"})
db.game.deleteMany({size:"0gb"})