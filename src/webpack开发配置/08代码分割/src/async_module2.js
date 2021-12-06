export default function (a,b){
    return import("lodash").then(({default:_})=>{
        return _.add(a,b)
    })
}