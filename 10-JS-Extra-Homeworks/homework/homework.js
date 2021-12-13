
// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
var array = [];

for (let p in objeto){
    array.push([p,objeto[p]]);
  }
  return array;
}



function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
let arr = string.split('').sort();                
  
let arr2 = [];  let obj = {}; let cont = 1;
  
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === arr[i + 1]) {
        cont++
    } else { let cant = cont; cont = 1;                   
            arr2.push([arr[i], cant])}
       };
  
 obj = Object.fromEntries(arr2)
    
  return obj
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

var array2 = []; var array3 = [];
var m = s.toUpperCase() ;

for (let e in s ) {
  if (m.includes(s[e])) {
          array2.push(s[e]);
             }else{
      array3.push(s[e]); 
    };
  }

    var string2 = array2.join('');
    var string3 = array3.join('');
    var string4 = string2.concat(string3);
    return string4;

}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
   //Escribe tu código aquí
let newString = ''; 
  
  for (let i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; 
    };

let sol =  newString.split(' ').reverse().join(' ')
  
return sol

} 




function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let arr = [];  
  let n = numero.toString().split(''); 
  let l = numero.toString();

  for (let i = 0; i < n.length; i++) { 
      if (n[i] === n[n.length-1]) {
        arr.push(n[i]); n.pop()
      }
   };
     
  if (l.length / 2 === arr.length || l.length === arr.length * 2 - 1) {
    return "Es capicua"
  } else {
    return "No es capicua"
  }
   
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

    let arr = []; exR = /a|b|c/;

  for (var i = 0; i < cadena.length; i++) {
      if (exR.test(cadena[i]) === false) {
        arr.push(cadena[i])
      }
    };
   return arr.join('');
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
 return arr.sort(function(a,b){
            return a.length - b.length
         })
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let arr3 = []; let arr4 = [];

for (let e in arreglo2) {
  if (arreglo1.includes(arreglo2[e])) { 
    arr4.push(arreglo2[e])
  }
};
for (let e in arreglo1) {
  if (arreglo1.includes(arreglo2[e])) { 
    arr3.push(arreglo2[e])
  }
};
if (arr3.length > arr4.length) {
  return arr3
} else { return arr4}



}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

