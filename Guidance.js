FUNCTIONAL vs CLASS BASED COMPONENT

import React from "react"

function App() {  /* FUNCTIONAL*/
    return (
        <div>
            <h1>Code goes here</h1>
        </div>
    )
}

export default App

-------------------

class App extends React.Component {  /* CLASS BASED*/
    render() {  /* obligatory!!*/
        return (
            <div>
                <h1>Code goes here</h1>
            </div>
        )
    }
}

export default App

-----------WITH PROPS--------------


import React from "react"

 function App(props) {
     return (
         <div>
             <h1>{props.whatever}</h1>
         </div>
     )
}


-------- CLASS COMP

class App extends React.Component {
    
    yourMethodHere() {
        
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.whatever}</h1>
            </div>
        )
    }
}

export default App

------------CHALLENGE------------------------

/*

Challenge:
1. Convert all 3 components to be class-based (these would all normally be separate components)
2. Fix the small bug (ERROR: "saying Welcome, !" no name - to FIX add <Header username="vschool"/> to the first)

*/

import React from "react"
import ReactDOM from "react-dom"

// #1
function App() {
    return (
        <div>
            <Header />  
            <Greeting />
        </div>
    )
}

// #2
function Header(props) {
    return (
        <header>
            <p>Welcome, {props.username}!</p>
        </header>
    )
}

// #3
function Greeting() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }
    return (
        <h1>Good {timeOfDay} to you, sir or madam!</h1>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))

----------------------------------------------------------
CLASS COMPONENTS

// #1
import React from "react"
import ReactDOM from "react-dom"


class App extends React.Component {
    render() {
        return (
            <div>
                <Header /> FIX ERROR <Header username="vschool"/>
                <Greeting />
            </div>
        )    
    }
}

// #2
import React from "react"
import ReactDOM from "react-dom"

class Header extends React.Component {
    render() {
        return (
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
        )    
    }
}

// #3
import React, {Component} from "react"  /*only for #3 because we didn't use React.Component*/
import ReactDOM from "react-dom"

class Greeting extends Component {
    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
        
        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        return (
            <h1>Good {timeOfDay} to you, sir or madam!</h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))





/* ONE WAY WITH FUNCTIONAL COMPONENT*/

import React from "react"

function MyInfo() {
  return (
    <div>
      <h1>Bob Ziroll</h1>
      <p>This is a paragraph about me...</p>
      <ul>
        <li>Thailand</li>
        <li>Japan</li>
        <li>Nordic Countries</li>
      </ul>
    </div>
  )
}

export default MyInfo



-------------CLASS BASED COMPONENT---------





------------- EXAMPLE OF IF STATEMENTS INSIDE REACT CODE--------------------

import React from "react"
import ReactDOM from "react-dom"

function App() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  
  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }
  
  return (
    <h1>Good {timeOfDay}!</h1>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))



------------------------VERSION TWO WITH STYLES --------------------

import React from "react"
import ReactDOM from "react-dom"

function App() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  
  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }
  
  const styles = {
    color: "#FF8C00", 
    backgroundColor: "#FF2D00",
    fontSize: "30px" or just 30
  }
  
  return (
    <h1 style={styles}>Good {timeOfDay}!</h1>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))






--------- VERSION THREE IN LINE STYLE---------------------------------------------------------

import React from "react"
import ReactDOM from "react-dom"

function App() {
  const date = new Date(2018, 6, 31, 15)
  const hours = date.getHours()
  let timeOfDay
  const styles = {
    fontSize: 30
  }
  
  if (hours < 12) {
    timeOfDay = "morning"
    styles.color = "#04756F"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
    styles.color = "#8914A3"
  } else {
    timeOfDay = "night"
    styles.color = "#D90000"
  }
  
  return (
    <h1 style={styles}>Good {timeOfDay}!</h1>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
