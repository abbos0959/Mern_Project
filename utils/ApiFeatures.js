class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query, 
    this.queryStr = queryStr;
  }
  search(){
      
      const name=this.queryStr.name 
      ? {
          name:{
              $regex:this.queryStr.name,
              $options:"i"
          }
        
      } :{}
      console.log(name);
      this.query=this.query.find({...name})
      return this
  }
  filter(){


const queryCopy={...this.queryStr}
const removeFields=["name","page","limit"]
removeFields.forEach((val)=>delete queryCopy[val])


let querystr=JSON.stringify(queryCopy)
querystr=querystr.replace(/\b(gt|gte|lt|lte)\b/g,(key)=>`$${key}`)
this.query=this.query.find(JSON.parse(querystr))
return this

  }

}
module.exports=ApiFeatures