import {Request, Response} from 'express';

export function sendSuccess(request: Request, Message = 'Request Successfull', data?:any) {

    let response = { StatusCode: 200, IsRequestSuccessfull: true,Message:Message, Data:data }

}

export function sendError(request: Request, response :Response,errorCode:number,errorMgs:string) {

    let Response = { StatusCode: errorCode, IsRequestSuccessfull: false, Message: errorMgs}
    response.send(Response)

}
   

export function sendCreated(request: Request, response: Response, data:any) {
    let Response = { StatusCode: 201, IsRequestSuccessfull: true, Message:'Document Created Successfully', Data:data}
      response.send(Response)
}