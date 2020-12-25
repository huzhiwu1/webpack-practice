import React from "react"
import textFn from "./text";
import Counter from "./counter";
const App = function () {
 
    return <div>
        <Counter/>
        <span>{ textFn()}</span>
    </div>
}
export default App;