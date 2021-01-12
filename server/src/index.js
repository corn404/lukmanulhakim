const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const cors = require("cors")
const moment = require("moment")
const consola = require("consola")
const mongoose = require("mongoose")
const Cronjob = require("cron").CronJob
const app = express()

const MONGO_URL = "mongodb://localhost:27017"
app.use(morgan("combined"))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.use("/api/v1/siswa", require("./routes/siswa"))

mongoose.connect(`${MONGO_URL}/db_sekolah`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    consola.success("Database Connected")
    app.listen(5000, () => {
        consola.success("Server Running at PORT 5000")
    })
}).catch(err => {
    consola.error(err)
})