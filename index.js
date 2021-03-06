const express = require("express");
const cors = require("cors");
const db = require("./config/db")
const app = express();

var HOST = process.env.HOST || '0.0.0.0';
var PORT = 8080

const importFoodgroup = require("./foodgroup.json")
const importFoodgroupsub = require("./foodgroupsub.json")
const importPackageunit = require("./packageunit.json")
const importPackageperunit = require("./packageperunit.json")

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/foodgroup', (req, res) => {
    db.query("SELECT * FROM food_group", (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
})

app.get('/foodgroupsub', (req, res) => {
    db.query("SELECT * FROM food_group_sub", (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
})

app.get('/foodgroupsub/:group_id', (req, res) => {
    db.query("SELECT * FROM food_group_sub WHERE group_id=?", [req.params.group_id], (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
})

app.get('/packageunit', (req, res) => {
    db.query("SELECT * FROM package_unit", (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
})

app.get('/packageperunit', (req, res) => {
    db.query("SELECT * FROM package_per_unit", (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
})

app.get('/weightunit/:weight_unit_id', (req, res) => {
    db.query("SELECT * FROM weight_unit  WHERE weight_unit_id=?", [req.params.weight_unit_id], (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
})

app.post('/add', (req, res) => {
    const name_th = req.body.name_th;
    const name_en = req.body.name_en;
    const foodGroupId = req.body.foodGroupId;
    const foodGroupsubId = req.body.foodGroupsubId;
    const packageUnitId = req.body.packageUnitId;
    const packageServingsizeId = req.body.packageServingsizeId;
    const quantity = req.body.quantity;
    const energy = req.body.energy;
    const energyFat = req.body.energyFat;
    const fat = req.body.fat;
    const saturatedFat = req.body.saturatedFat;
    const cholesterol = req.body.cholesterol;
    const protein = req.body.protein;
    const carbohydrates = req.body.carbohydrates;
    const sugar = req.body.sugar;
    const dietaryFibar = req.body.dietaryFibar;
    const sodium = req.body.sodium;
    const calcium = req.body.calcium;
    const vitaminA = req.body.vitaminA;
    const vitaminB1 = req.body.vitaminB1;
    const vitaminB2 = req.body.vitaminB2;
    const iron = req.body.iron;

    db.query(
        // "INSERT INTO product100 (name_th, name_en, foodGroupId, foodGroupsubId, packageUnitId, packageServingsizeId, quantity, energy, eneryFat, fat, saturatedFat, cholesterol, protein, carbohydrates, sugar, dietaryFibar, sodium, calcium, vitaminA, vitaminB1, vitaminB2,  iron) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", 
        // [name_th, name_en, foodGroupId, foodGroupsubId, packageUnitId, packageServingsizeId, quantity, energy, energyFat, fat, saturatedFat, cholesterol, protein, carbohydrates, sugar, dietaryFibar, sodium, calcium, vitaminA, vitaminB1, vitaminB2, iron],
        "INSERT INTO product100 (name_th, name_en) VALUES (?, ?)", 
        [name_th, name_en],

    (err, result) => {
        if(err) {
            consol.log("ERRRRRRRRRRRRROR")
            consol.log(err)
        } else {
            res.send("Value Inserted !")
        }
    }
    );
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port . ${PORT}`)
})

// app.use(function(req, res, next) {
//     next();
//     res.header("Access-Control-Allow-Origin", "https://foodchoicenodejs.herokuapp.com"); // update to match the domain you will make the request from
//     res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header('Access-Control-Allow-Credentials', true); 
// });

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
//     next();
// });