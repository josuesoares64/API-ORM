class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async pegaTodos(req, res) {
    try {
      const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros();
      return res.status(200).json(listaDeRegistro);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  // POST - Criar um novo registro
  async criaNovo(req, res) {
    const dados = req.body;

    try {
      const novoRegistro = await this.entidadeService.criaRegistro(dados);
      return res.status(201).json(novoRegistro);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async atualiza(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;

    try {
      const registro = await this.entidadeService.atualizaRegistro(
        dadosAtualizados,
        Number(id)
      );

      if (!registro) {
        return res
          .status(404)
          .json({ mensagem: `Registro com id ${id} não foi encontrado.` });
      }

      return res.status(200).json({
        mensagem: 'Registro atualizado com sucesso.',
        registro,
      });
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
}

module.exports = Controller;
