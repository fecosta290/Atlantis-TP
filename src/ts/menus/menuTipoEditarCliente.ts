import Menu from "../interfaces/menu";

export default class MenuTipoEditarCliente implements Menu {
    mostrar():void{
        console.clear()
        console.log('########################################')
        console.log('Qual cliente você quer editar? ')
        console.log('1- Titular')
        console.log('2- Dependente')
    }
}