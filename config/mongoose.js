

//connecting to mongo atlas
const mongoose = require('mongoose');
const db =  '';
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(() => {
    console.log(`connection successful`);
}).catch((err)=> console.log(`no connection`));



