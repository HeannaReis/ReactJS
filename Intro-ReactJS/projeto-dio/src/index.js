import React from "react"
import ReactDOM from "react-dom"
import "./style.css"

function sum(a,b){
  return a + b
} 

function PrimeiroJSX (){
  return (
      <div className="teste">
        Joel Heanna - Introdução ao ReactJS
      <h2>Soma: {sum (10, 20)}</h2>
      </div>  
  )
}

const App = () => {
    return (
        <div className = "App">
        {PrimeiroJSX()}
        </div>
    )
} 

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement )