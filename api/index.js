const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { seedDB } = require("./src/utils/index.js");
require('dotenv').config();

conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT, () => {
    seedDB()
    console.log("%s listening at ", process.env.PORT); 
  });
});