// O que é o typescript? Linguagem basada no JS mas add tipagem estática opcional

//ts
// 💡 Tipagem Estática Opcional (TypeScript)
//
// ➤ Tipagem estática: o TypeScript verifica os tipos antes de rodar o código,
//    evitando erros em tempo de execução.
//
// ➤ Opcional: você escolhe quando usar. Pode tipar tudo ou deixar o TS inferir.
//
// Exemplo:
let nome: string = "Gabriel";
nome = "123"; // ❌ Erro detectado em tempo de compilação SE EU TIRAR AS "" DE 123, por ser uma String
let idade = 25; // ✅ TS infere que é number (AQUI É BASICAMENTE A MESMA COISA QUE O JS, MAS PRA QUE VOU
//FAZER IGUAL AO JS SE TENHO O TS PARA ME AJUDAR A CRIAR UM CÓDIGO MAIS SEGURO E ROBUSTO?)
console.log("Nome: " + nome + " Idade: " + idade)
// ✅ Vantagens:
// - Encontra erros antes de executar (A TODO MOMENTO ELE CAÇA ERROS, NÃO PRECISA RODAR PARA SABER DE ERRO)
// - Melhora autocompletar e previsibilidade
// - Facilita manutenção em projetos grandes

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//TYPE ANOTATIONS

const myString: string =  "Gabriel"
const myNumber: number =  15
const myBoolean: boolean =  false

function soma(a: number, b: number){
    return a + b
}

function greet(name: string, age?:number){ //parâmetro opcional precisa SEMPRE ser o último, senão dá bosta
    if(age == undefined){
        return("Olá " + name)
    }else{
        return("Olá " + name + " de " + age + " anos")
    }
}

console.log(soma(myNumber, myNumber))
console.log(greet(myString))
console.log(greet(myString, myNumber))