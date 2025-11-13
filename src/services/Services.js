const database = require("../models");

class Services {
  constructor(nomeDoModelo) {
    this.nomeDoModelo = nomeDoModelo;
  }

  async pegaTodosOsRegistros() {
    return await database[this.nomeDoModelo].findAll();
  }

  async atualizaRegistro(dadosAtualizados, id) {
    // Primeiro, verifica se o registro existe
    const registro = await database[this.nomeDoModelo].findOne({
      where: { id },
    });
    if (!registro) return false;

    // Depois tenta atualizar
    const [linhasAfetadas] = await database[this.nomeDoModelo].update(
      dadosAtualizados,
      { where: { id } }
    );

    // Mesmo se linhasAfetadas for 0 (dados iguais), considera sucesso
    return true;
  }
}

module.exports = Services;
