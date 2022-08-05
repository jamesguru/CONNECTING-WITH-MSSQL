import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import mssql from 'mssql';
import { sqlconfig } from './Config/Config';
dotenv.config();


const app = express();


const connect = async()=>{

    const pool = await mssql.connect(sqlconfig);


    if(pool.connected){

        

        const result = await pool.query('SELECT * FROM users');

       
        console.log(result.recordsets);



        console.log('Database connected')
    }else{

        console.log('something went wrong');
    }



}
 
connect();


app.use((err:Error,req:Request,res:Response,next:NextFunction)=>{

    console.log(err.message);
})

app.listen(4444,()=>{

    console.log("Server started in on port 4444");
})
