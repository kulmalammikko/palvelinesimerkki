//Otetaan Mongoose käytöön
const mongoose = require('mongoose');

const bookSchema = mongoose.Schema;

//Muokkaa tämä osion harjoitustyössä oman tietorakenteen mukaan
let book = new bookSchema ( {
    title: {
       type: String
    },
    author: {
      type: String
    },
    publisher: {
      type: String
    },
    read: {
      type: Boolean
    }
  },
    { collection: 'books'}
  )

// Export model, huom! Parametreina kokoelman nimi ja skeeman nimi, jotka pitää vaihtaa harkkatyön mukaiseksi.
module.exports = mongoose.model('books', book);