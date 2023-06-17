import Processo from "../abstracoes/processo";
import CadastroAcomodacoes from "../processos/Cadastro/cadastroAcomodacoes";
import Principal from "../processos/principal";

console.clear()
console.log(`######## ATLANTIS ########`);

let processo: Processo
let execucao: Boolean = true

processo = new CadastroAcomodacoes()
processo.processar()

while (execucao) {
    processo = new Principal()
    processo.processar()
    execucao = processo.Execucao
}