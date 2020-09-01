import { Request, Response } from 'express'
import { getConnection } from 'typeorm'

import { User } from '../entity/User';

export default {
    async index(request: Request, response: Response){
        const {firstName, lastName} = request.body;
        
        console.log(request.body)
        try{
            await getConnection()
                .createQueryBuilder()
                .insert()
                .into(User)
                .values({ 
                    firstName,
                    lastName
                })
                .execute();
            return response.json({ message: "funcionou" });
        } catch(e){
            console.log(e);
        }
        
        
    }
}