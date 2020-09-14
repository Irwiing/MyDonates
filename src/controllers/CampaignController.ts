import { Request, Response } from 'express'
import { getConnection, getRepository, getManager } from 'typeorm'

import { Campaign } from '../entity/Campaign';


export default {
    async index(request: Request, response: Response){
       
        try {
            const campaigns = await getRepository(Campaign).find({
                join: {
                    alias: "campaign",
                    leftJoinAndSelect: {
                        user: "campaign.user"
                    }
                }
            });

            return response.json(campaigns)
        } catch (e) {            
            return response.json(e)
        }
    },
    async create(request: Request, response: Response){
        try{
            const campaign = await getRepository(Campaign).create(request.body)
            const result = await getRepository(Campaign).save(campaign)
                   
            return response.status(200).json(result);
        } catch(e){
            return response.json(e)
        }
    }
}