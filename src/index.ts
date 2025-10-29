// O que é o typescript? Linguagem basada no JS mas add tipagem estática opcional

import { callbackify } from "util";

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
let  name: string

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


interface Wallet{
    coins?: number,
    credits?: number,
}

interface User{
    name: string,
    createdAt: Date,
    wallet: Wallet
}

interface Admin extends User{
    ban(user: User):void
}

function createUser(username: string): User{
    return{
        name: username,
        createdAt: new Date(),
        wallet: {coins: 0, credits: 0}
    }
}

function createAdmin(user:User):Admin{
    return{
        ...user,
        ban(user) {
            console.log("O usuário "+user.name+" foi banido! Carteira: "+ user.wallet.coins+" "+user.wallet.credits)
        },
    }
}

const Gabriel = createUser("gabriel")
const Lucas = createUser("Lucas")
const admin = createAdmin(Gabriel)
function updateWallet(user: User, wallet: Wallet){
    user.wallet = {...user.wallet, ...wallet}
}
updateWallet(Gabriel, {coins:15, credits:15})
console.log(Gabriel)
admin.ban(Lucas)

//TYPES
type nameList = string[]
type Animal = {
    weight: number,
    birth: string
}

function createAnimal(weighthh: number, birth:string): Animal{
    return{weight: weighthh, birth:birth}
}
let cow = createAnimal(50, "20/05/2007")
console.log(cow)

//TUPLAS
type calendarDate = [day: number, month: number, year: number]
const date: calendarDate = [10,11,2025]

//ENUMS
enum Players{
    "Cristiano Ronaldo" = 1,
    "Lionel Messi",
    "Pelé",
    "Luciano"
}
type Team = [club: string, year: string, goat: Players]
const newTeam: Team = [
    "Aoba EC",
    "20/05/2007",
    Players["Lionel Messi"]
]
console.log(newTeam)