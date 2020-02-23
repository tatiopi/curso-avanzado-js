console.log('Hello, TypeScript');

const sum = add(2,3);

let muted: boolean = true;

// numeros 
let numerador:number = 42 ;
let denominador:number = 6;
let resultado = numerador/denominador;

// strings
let nombre : string = 'Richard';

// arreglos 
let people: string[] = [];
people = ["Isabel" , "Nicole" , "Rail"];

let peopleAndNumber : Array<string| number> = [];

peopleAndNumber.push(3);
peopleAndNumber.push('Antonio');

// Enum 
enum Color  {
    Rojo  = 'Rojo', 
    Verde = 'Verde',
    Azul = 'Azul',
}

let colorFavorito: Color = Color.Verde;

console.log('Mi color favorito es ' + colorFavorito);

// Any 

let comodin : any = 'Joker'; 
comodin = { type : 'Wildcard'} ;

// functions
function add (a:number , b:number) {
    return a + b ;
}

const suma = add(1,3);

console.log(suma)

function createAdder(a : number) : (number) => number {
    return function (b: number){
        return b + a ;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);
console.log(fourPlus6)

// ? opcional
function fullName (firstName : string , lastname : string = "Smith") : string {
    return `${firstName} ${lastname}`; 
}

const richard = fullName('Alejandro','Ramos');

console.log(richard)

// interfaces

interface Rectangulo {
    ancho : number ;
    alto : number ;
    color? : Color;
}

let rect : Rectangulo = {
    ancho :4 ,
    alto : 6 ,
    color : Color.Rojo
}

function area(r:Rectangulo){
    return r.alto + r.ancho
}

const areaRect = area(rect);

console.log(areaRect);

rect.toString = function() {
    return this.color ?  `Un rectangulo ${this.color}` : 'Un rectangulo'; 
}

console.log(rect.toString());