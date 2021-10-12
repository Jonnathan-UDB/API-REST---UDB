const { Router } = require('express');
const router = Router();
const _ = require('underscore');


const Estudiante = require('../UDB.json');
//console.log(Estudiante);

var mensaje = "ERROR. x_x | debe tener información los campos [Carnet, Nombre, Apellido, Tel, correo]";

router.get('/api/UDBestudiantes', (req, res) => {
    res.json(Estudiante);
});

router.post('/api/UDBestudiantes', (req, res) => {
    const {carnet, Nombre, Apellido, Tel, Correo} = req.body

    if (carnet && Nombre && Apellido && Tel && Correo){
        const id = Estudiante.length + 1;
        const newestudiante = {id, ...req.body};
        Estudiante.push(newestudiante);
        res.json(Estudiante);
    }
    else{
        res.send('');
    }
    
});

router.put('/api/UDBestudiantes/:id', (req, res) =>{
    const { id } = req.params;
    const {carnet, Nombre, Apellido, Tel, Correo} = req.body

    if (carnet && Nombre && Apellido && Tel && Correo){
        _.each(Estudiante, (Estudiant, i) => {
            if (Estudiant.id == id){
                Estudiant.carnet = carnet;
                Estudiant.Nombre = Nombre;
                Estudiant.Apellido = Apellido;
                Estudiant.Tel = Tel;
                Estudiant.Correo = Correo;
            }
        });
        res.json(Estudiante);
    }else{
        res.send(mensaje);
    }
})

router.delete('/api/UDBestudiantes/:id', (req, res) => {
    const { id } = req.params;
    _.each(Estudiante, (Estudiant, i) => {
        if(Estudiant.id == id) {
            Estudiante.splice(i, 1);
        }
    });
    res.send(Estudiante);
})

module.exports = router;