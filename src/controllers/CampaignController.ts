import { Request, Response } from 'express'
import { getConnection, getRepository } from 'typeorm'

import { Campaign } from '../entity/Campaign';

export default {
    async index(request: Request, response: Response){
        try {
            const campaigns = await getRepository(Campaign)
                .createQueryBuilder("campaign")
                .getMany();
            return response.json(campaigns)
        } catch (e) {            
            return response.json(e)
        }
    },
    async create(request: Request, response: Response){
        
        const { title, description, target, user } = request.body;

        try{
            const { identifiers } = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Campaign)
                .values({
                    title, 
                    description, 
                    target, 
                    user 
                })
                .execute();            
            return response.status(200).json(identifiers);
        } catch(e){
            return response.json(e)
        }
    }
}