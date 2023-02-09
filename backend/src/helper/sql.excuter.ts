import {getConnection } from '../config/connection';
import { sendError } from './response';





export async function execute(query: any[]) {
    try {
        let Promises :any[]  = [];
    
        for (var i = 0; i < query.length; i++) {
                     Promises.push(executeQuery(query[i]));
        }
        
        return await Promise.all(Promises)
            
    } catch (error:any) {
        return error;
        
    }
   
    
    
}

export function executeQuery(query:any) {
    return new Promise ((resolve, reject) => {
   try {
    getConnection(function (err:Error, con:any) {
if(!err){
    con.query(query, function (err:Error, data:any) {  
        if(err)
        reject(err)
        else
        console.log("errerrerr",data) 
        resolve(data)     
    })
}
    })
   } catch (error) {
    console.log("errrrrrrrrrrrr",error)
   }
})
}

                
                   
