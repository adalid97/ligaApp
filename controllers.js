const {Equipo, Jugador} = require('./models');

exports.listEquipos = (req, res) => {
    Equipo.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.readEquipo = (req, res) => {
    Equipo.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.deleteEquipo = (req, res) => {
    Equipo.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.updateEquipo = (req, res) => {
    Equipo.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, pais: req.body.pais, ano: req.body.ano, clasificacion: req.body.clasificacion } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );
}

exports.createEquipo = (req, res) => {
    const equipo = new Equipo({ nombre: req.body.nombre, pais: req.body.pais, ano: req.body.ano, clasificacion: req.body.clasificacion });
    equipo.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.listarJugadores = (req, res) => {
    Equipo.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.readJugador = (req, res) => {
    Equipo.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.deleteJugador = (req, res) => {
    Equipo.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.updateJugador = (req, res) => {
    Equipo.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, nacionalidad: req.body.nacionalidad, dorsal: req.body.dorsal, salario: req.body.salario } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );
}

exports.createJugador = (req, res) => {
    const equipo = new Equipo({ nombre: req.body.nombre, nacionalidad: req.body.nacionalidad, dorsal: req.body.dorsal, salario: req.body.salario });
    equipo.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}
