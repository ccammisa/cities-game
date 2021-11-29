import React, {useEffect} from "react";


export default function CountryCapitalGame({ data }) {

const cities = Object.keys(data)
const countries = Object.values(data)
const answer = Object.entries(data)
let countriesAndCities = [...Object.values(data), ...Object.keys(data)]
const sortedData = countriesAndCities.sort((a,b)=> 0.5 - Math.random())

console.log("data",data)
console.log("cities",cities)
console.log("countries",countries)
let button = {}
const buttons = Object.keys(data).reduce((result,key) => {
    button  ={
        key: key
    }
})

// console.log( "data",data.map(key,value))

//esto tendria que ejecutarlo cuando clickeo el segundo elemento
// console.log("answer",answer.find((element) => {
//     return element.some((oelemen) => {
//         return oelemen ==="Zambia"}) }))

let isSelected = Array(answer.length).fill(false)
let selectedCount = 0
let selectedId =""
let firstValue=""
let secondValue=""
let win = null;
let correctAnswer = [];

const handleOnClick =(event)=>{

    if(firstValue === ""){
        firstValue = event.target.value
        console.log("firstValueSelected",firstValue)
    } else {
        correctAnswer = answer.find((element) => {
            return element.some((innerElement)=> {
                return innerElement === firstValue
            })
        })
        console.log("correctAnswer",correctAnswer)
        secondValue = event.target.value
        console.log("secondValue", secondValue)
        win = correctAnswer.indexOf(secondValue)
        console.log("win?",win)
        // if(win !== -1) {
        //   let removevalue1 = countriesAndCities.indexOf(secondValue)
        //   countriesAndCities.splice(removevalue1,1)
        //   let removevalue2 = countriesAndCities.indexOf(firstValue)
        //     countriesAndCities.splice(removevalue2,1)
        //     console.log("countriesAndCities2",countriesAndCities)
        //     return countriesAndCities
          
        //   } //remover el elemento first
        console.log("indexof",countriesAndCities.indexOf(secondValue))
    }
  }

  useEffect(() => {
    if(win !== -1) {
      let removevalue1 = countriesAndCities.indexOf(secondValue)
      countriesAndCities.splice(removevalue1,1)
      console.log("countriesAndCities555",countriesAndCities)
      let removevalue2 = countriesAndCities.indexOf(firstValue)
        countriesAndCities.splice(removevalue2,1)
        console.log("countriesAndCities2",countriesAndCities)
        return countriesAndCities
      
      } //remover el elemento first
  },[firstValue,secondValue])

    console.log("asda",countriesAndCities)
    let gamesdata = countriesAndCities;
    return (
                <div >
                    <h1>Your game component</h1>
                    {
                        //sortedData.map((value,index)=>
                        gamesdata.map((value,key) =>
                           <div>
                           <button  data-role="button"        
                            key={key}
                            //id={key}
                            //style={{backgroundColor: color}}
                            onClick={handleOnClick}
                             value={value}
                            >{value}
                        </button>
                        </div>
                       
                        
                            )
                    }
                </div>
            );
}

