const database = require('../models');

class PessoaController {
  static async pegaTodas(req, res) {
    try {
      const listaDePessoas = await database.Pessoa.findAll();
      return res.status(200).json(listaDePessoas);
    } catch (erro) {
      return res.status(500).json({ mensagem: erro.message });
    }
  }
}

module.exports = PessoaController;
