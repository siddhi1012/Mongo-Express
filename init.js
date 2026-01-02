const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main()
.then(() =>{
    console.log("Connection Succesful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}
let allChats = [
    {
        from : "rahul",
        to : "ram",
        msg : "Send me your notebook",
        created_at : new Date(),
    },
    {    
        from : "shyam",
        to : "nitik",
        msg : "Dinner was awesome",
        created_at : new Date(),
    },
    {    
        from : "siddhi",
        to : "sakshi",
        msg : "Today is nice day",
        created_at : new Date(),
    },
    {    
        from : "Prasad",
        to : "Aryan",
        msg : "Good Morning",
        created_at : new Date(),
    },
];
Chat.insertMany(allChats);
