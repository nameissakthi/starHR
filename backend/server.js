import express from "express"
import cors from "cors"
import 'dotenv/config'
import connetDB from "./config/mongodb.js"
import serviceRouter from "./routes/serviceRoute.js"


const app = express()
const port = process.env.PORT || 4000
connetDB()
// connectCloudinary()


app.use(express.json())
app.use(cors())


app.use("/api/service", serviceRouter)


app.get("/", (req,res) => {
    res.send("API WORKING")
})

app.listen(port, () => {
    console.log("Server Running on ",port)
})