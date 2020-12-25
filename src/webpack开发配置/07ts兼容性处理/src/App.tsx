import React, { useCallback, useEffect, useState } from "react";

const App = function () {
    const [num, setNum] = useState<number>(0)

    useEffect(() => {
        (async () => {
             await new Promise((resolve, reject) => {
                setTimeout(() => {
                    setNum(1)
                },1000)
            })
        })()
    },)
    return <div>app{ num}</div>
}

export default App;