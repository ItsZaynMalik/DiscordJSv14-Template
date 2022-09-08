const mongoose = require('mongoose');

async function connect() {
    if(!client.config.mongo){
        console.warn(`[DATABASE] For database access, MongoDB URI, is required in .env file.`)
        return
    }
    mongoose.connect(client.config.mongo, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    mongoose.connection.once("open", () => {
        console.log('[DATABASE] Connected To Database')
    })
    return;
}

module.exports = connect;
