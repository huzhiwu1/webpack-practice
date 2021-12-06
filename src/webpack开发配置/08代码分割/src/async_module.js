export default function getElement(element){
    return import("lodash").then(({default:_})=>{
        return _.getElement(element)
    })
}

