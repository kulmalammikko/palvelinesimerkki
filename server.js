// Ota express käyttöön
const express =  require('express');
const app = express();

// Ota mongoose käyttöön -> tietokantayhteys
const mongoose = require('mongoose');

//Ota books käyttöön - muista vaihtaa harkassa oikea tiedoston nimi
const book = require('./bookSchema.js');

//Ota mongodb käyttöön -- palataan asiaan, tarviiko asentaa erikseen
const mongodb = require('mongodb');

//Ota bodyparser käyttöön lomakkeen käsittelyä varten
const bodyparser = require('body-parser');

//Aseta määritykset express-palvelimelle
//Ota käyttöön public-tiedosto
app.use(express.static('public'));
    //Ota käyttöön bodyparser
 app.use(bodyparser.urlencoded({extended:false}));

//Muodostetaan tietokantayhteys
// Luo vakio connectionstringille
const uri = 'mongodb+srv://demokko:rQzVIcmTCeKg46k9@cluster0.sotfj2v.mongodb.net/bookDb?retryWrites=true&w=majority'
// Muodostetaan yhteys tietokantaan
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser:true})

// Luodaan vakio tietokantayhteydelle
const db = mongoose.connection
// Näytä ilmoitus, jos yhteys ok
db.once('open', function() {
    console.log('Tietokantayhteys avattu');
})


//Laitetaan palvelin kuuntelemaan porttia 8080
const server = app.listen(8080, function(){});