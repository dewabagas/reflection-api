const Reflection = require("../models/index").Reflection;
const User = require("../models/index").User;

exports.postReflection = async (req, res) => {
    const body = req.body;
    const success = body.success;
    const low_point = body.low_point;
    const take_away = body.take_away;
 
    return Reflection.create({
        success: success,
        low_point: low_point,
        take_away: take_away,
        owner_id: req.id
    }).then(result => {
        res.status(200).send({
            status: "SUCCESS",
            message: "Reflection created",
            data: result
        })
    }).catch(error => {
        res.status(503).send({
            status: "FAILED",
            message: "failed create Reflection"
        })
    })
 }
   
 exports.getReflections = async (req, res) => {
     console.log(`userid: ${req.id}`)
    User.findOne({where: {id: req.id}, 
        include: {
            model: Reflection,
            as: 'reflections'
        }
    }).then(result => {
        console.log("result");
        console.log(result);
        res.status(200).send({
            status: "SUCCESS",
            data: result
        })
    }).catch(error => {
        res.status(503).send({
            status: "FAILED",
            message: "failed load reflections"
        })
    })
}