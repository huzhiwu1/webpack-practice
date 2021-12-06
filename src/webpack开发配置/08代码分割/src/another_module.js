// import _ from "lodash"
import "./async_module"
import "./async_module2"
// console.log(_.join(["hello","world"],"-"))
console.log("another module")
const button = document.createElement("button")
button.textContent = "加法2"
button.onclick = function(){
    import(/* webpackChunkName: 'math' */ "./math.js").then(({add})=>{
        console.log(add(3,4))
    })
}
