const request= require("request");

const geocode= (address,callback)=>{
    const url= "https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoiYWhtYWRobWF6YWFsIiwiYSI6ImNrNnIzOWZ3czAwNGkzbnA5YzhpcHQzdHcifQ.BEgb2ugop67dfxzzJHsk4Q";
    request({url,json:true},(error,{body})=>{
            if(error)
            callback("Please make sure that you are connected to the internet!",undefined);

            else if(body.features.length===0)
            callback("Please enter a valid location!",undefined);

            else{
            callback(undefined,{
                    longitude:body.features[0].center[0],
                    latitude:body.features[0].center[1],
                    location:body.features[0].place_name
            })
        }
    })
}



module.exports= geocode;