class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  // GET - Buscar todos os registros
  async pegaTodos(req, res) {
    try {
      const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros();
      return res.status(200).json(listaDeRegistro);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  // PUT - Atualizar um registro
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
        mensagem: "Registro atualizado com sucesso.",
        registro,
      });
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
}

module.exports = Controller;
