import express from 'express';



import sendmailcontroller from './sendmailcontroller'
import smtpsettingcontroller from './smtpsettingcontroller'

 const routes : express.Router[] = [
    sendmailcontroller,
    smtpsettingcontroller
]

export default routes;