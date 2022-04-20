const explorers = [
 {
   name: "Explorer 1",
   exercises_completed: 10,
   rate: 99,
   city: "CDMX",
   stack: [
     "js",
     "c#"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: true,
       exercisesFinished: true
     }
   }
 },
 {
   name: "Explorer 2",
   exercises_completed: 9,
   city: "Veracruz",
   rate: 50,
   stack: [
     "js"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: false
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 },
 {
   name: "Explorer 3",
   exercises_completed: 3,
   city: "Sonora",
   rate: 100,
   stack: [
     "elixir"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 }
]

//imprimir cada propiedad name de cada uno de los explorers
explorers.forEach((element) => console.log(element.name))
//imprimir el stack de cada uno de los explorers
explorers.forEach((element)=> console.log(`el usuario ${element.name} tiene experiencia en:`+element.stack))
//crear una lista con cada uno de los stacks de los explorers
const explorersStacks = explorers.map(function(stacks){
 return stacks.stack})
console.log(explorersStacks)

//explorers que tengan js en su stack
const explorersWithJs = explorers.filter((jsStack) => // esta es una función
  jsStack.stack.includes('js') // indicación para solo filtrar elementos que incluyan "land"
)

console.log(explorersWithJs)

//primer explorer que sea de cdmx
const cityCdmx = explorers.find((city) => city.city=='CDMX')
console.log(cityCdmx)

//suma de todos los exercises_completed
const exercisesCompletedTotal = explorers.reduce((acc, element) => acc + element.exercises_completed, 0)
//acc refiere al acumulado
console.log(exercisesCompletedTotal)

//uno de los explorers tiene la propiedad exercisesFinished en frontend como true
const exercisesTrue = explorers.some((b) =>  b.missions.frontend.exercisesFinished === true)
console.log(exercisesTrue)

//todos los explorers tienen la propiedad isFinished del onboarding como true
const finishedOnBording = explorers.every((finished) => finished.missions.onboarding.isFinished === true)
console.log(finishedOnBording)