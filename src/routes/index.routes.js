const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemons = require("./pokemons.routes");
const types = require("./types.routes");
const filter = require("./filter.routes");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemons", pokemons);
router.use("/types", types);
router.use("/filter", filter);

module.exports = router;
