//crear un objeto vacio

const nullObject={};
console.log(`ejemplo 1: crear un objeto vacio: ${nullObject}`)

//crear un objeto con propiedades 
const myObject={
	name:'alan',
	apellido:'moreno',
	edad:'25'
};

console.log(`ejemplo 2: crear un objeto con propiedades:`);
console.log(myObject);

//crear un objeto con diferentes propiedades
const myObject2={
	nombre:'alan',
	edad:'25',
	nicknames:[
		'alansongo',
		'pepe',
		'pancho'
	],
	direccion:{
		condigoPostal:'4332',
		calle:'morales',
		numero:34,
		ciudad:'san luis'
	}
};

console.log("ejemplo 3: objeto con diferentes propiedades");
console.log(myObject2);
console.log(myObject2.nombre);
console.log(myObject2.nicknames[2]);
console.log(myObject2.direccion);

//Objeto con métodos
const pet = {
  name: "alan",
  // Esta es una función que se guarda como propiedad
  sayHello: function(){
    // this.name hace referencia a la propiedad del objeto
    console.log(`${this.name} te saluda en español!`);
  }
};

console.log("Ejemplo 4: Objeto con métodos");
console.log(pet);
pet.sayHello();


//Objeto con método que recibe parámetros
const myPet = {
  name: "Woopa",
  sayHelloToMyPet: function(yourPet){
    console.log(`${this.name} say's hello to ${yourPet}`)
  }
};

console.log("Ejemplo 5: Objeto con método que recibe parámetros");
myPet.sayHelloToMyPet("alan");