import { Request, Response } from 'express'
import { getConnection, getRepository } from 'typeorm'

import { User } from '../entity/User';

export default {
    async index(request: Request, response: Response){
        try {
            const users = await getRepository(User)
                .createQueryBuilder("user")
                .getMany();
            return response.json(users)
        } catch (e) {            
            return response.json(e)
        }
    },

    async create(request: Request, response: Response){
        const { username, whatsapp, email } = request.body;
        
        try{
           const { identifiers } = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(User)
                .values({ 
                    username,   
                    whatsapp,
                    email                 
                })
                .execute();
            return response.status(200).json(identifiers);
        } catch(e){
            return response.json(e)
        }
    }
}