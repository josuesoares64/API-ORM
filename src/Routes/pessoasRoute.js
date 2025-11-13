const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const pessoaController = new PessoaController();
const router = Router();

// Rota para listar todas as pessoas
router.get('/pessoas', (req, res) => pessoaController.pegaTodos(req, res));

// Rota para atualizar uma pessoa específica
router.put('/pessoas/:id', (req, res) => pessoaController.atualiza(req, res));

module.exports = router;
