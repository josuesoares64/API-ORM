const Services = require("./Services.js");

class PessoaServices extends Services {
  constructor() {
    super("Pessoa");
  }

  async pegaMatriculasPorEstudante(id) {
    const estudante = await super.pegaUmRegistroPorId(id);

    if (!estudante) {
      throw new Error(`Pessoa com id ${id} não encontrada`);
    }

    return await estudante.getAulasMatriculadas();
  }
}

module.exports = PessoaServices;
