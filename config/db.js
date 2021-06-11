const mongoose = require('mongoose');

const DB_URI = `mongodb://localhost/my-app-node`;

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

module.exports = () => {
    const connect = () => {
        mongoose.connect(
            DB_URI,
            {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
            (err) => {
                if (err) {
                    console.log('DB: ERROR');
                } else {
                    console.log('Conexión correcta!');
                }
            },
        );
    };

    connect();
};
