import { Request, Response } from 'express'
import { getConnection } from 'typeorm'

import { Donate } from '../entity/Donate'

export default {
    async index(request: Request, response: Response){

    },
    async create(request: Request, response: Response){
        
        const {  user, campaign, value } = request.body;

        try{
            const { identifiers } = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Donate)
                .values({
                    user, 
                    campaign, 
                    value                    
                })
                .execute();            
            return response.status(200).json(identifiers);
        } catch(e){
            return response.json(e)
        }
    }
}