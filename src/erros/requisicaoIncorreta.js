import erroBase from "./erroBase.js";

class requisicaoIncorreta extends erroBase{
    constructor(mensagem = "Um ou mais dados estão incorretos"){
        super(mensagem, 400);
    }
}

export default requisicaoIncorreta