export const dateNormalize = (obj:any)=>{
    const object = {...obj}
    nr(object);
    return JSON.stringify(object)
}

const nr = (object:any)=>{
    for(const [key,val] of Object.entries(object)){
        if(val instanceof Date){
            object[key] = `(normalized for docs | Date could differ from your locals) ${val.toLocaleDateString()} ${val.toLocaleTimeString()}`
        }
        if(typeof val ==='object' ){
            nr(val)
        }
    }
}