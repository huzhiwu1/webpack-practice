// import _ from "lodash"
import "./another_module"
import "./async_module2"
// console.log("index",_.add(10,10))
console.log("index")

const button = document.createElement("button")
button.textContent = "加法"
button.onclick = function(){
    import(/* webpackChunkName: 'math' */ "./math.js").then(({add})=>{
        console.log(add(3,4))
    })
}

document.body.appendChild(button)