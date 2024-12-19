const express = require("express")
const cors = require('cors')

const app = express()
require('./config/dbConfig')
const userRouter = require('./routes/userRoutes')
const authRouter = require('./routes/authRoutes')
const roleRouter = require('./routes/roleRoutes')
const skillRouter = require('./routes/skillRoutes')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)
app.use('/api/role',roleRouter)
app.use('/api/skill',skillRouter)


app.listen(8000,()=>console.log('server is running on port 8000'))