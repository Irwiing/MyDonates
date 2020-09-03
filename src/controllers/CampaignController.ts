import { Request, Response } from 'express'
import { getConnection } from 'typeorm'

import { Campaign } from '../entity/Campaign';
import { User } from '../entity/User';

export default {
    async create(request: Request, response: Response){
        const campaign = new Campaign();
        const user = new User()
        const { title, description, target } = request.body;
        const id = request.headers.authorization;

        
        campaign.title = title;
        campaign.description = description;
        campaign.target = target;
        campaign.user =;
        try{
           const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Campaign)
                .values({ 
                                   
                })
                .execute();
            return response.json(result.generatedMaps);
        } catch(e){
            return response.json(e)
        }
    }
}