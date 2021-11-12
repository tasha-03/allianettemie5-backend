const express = require("express")
const { Sequelize, DataTypes } = require('sequelize');
const cors = require("cors")

const sequelize = new Sequelize('postgres://postgres:121601@localhost:5432/allianettemie5')

const app = express()

app.use(cors())
app.use(express.json())

const User = sequelize.define('Users', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    }
  }, {
    timestamps: false
  });

app.get('/', (request, response) => {
    console.log(request.hostname)
    User.create({login: 'arwen', email: '456@123.com', password: 'eveningstar'}).then(result => response.send(result)).catch(e => response.send(e))
    return 
})
app.get('/test', (request, response) => {
    console.log('Testing')
    User.findAll().then(
        result => response.send(result)
    )
    return 
})
app.post('/create', (request, response) => {
  console.log(request.body)
})
app.listen(3001, async () => {
    console.log('Server has been started')
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})