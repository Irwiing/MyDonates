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
            return response.status(400).json(e)
        }
    },
    async create(request: Request, response: Response){
        try{
            const campaign = getRepository(Campaign).create(request.body)
            const result = await getRepository(Campaign).save(campaign)
                   
            return response.status(200).json(result);
        } catch(e){
            return response.status(400).json(e)
        }
    },
    async update(request: Request, response: Response){
        const { id } = request.params;

        try {
            const campaignTmp = await getRepository(Campaign).find({
                join: {
                    alias: "campaign",
                    leftJoinAndSelect: {
                        user: "campaign.user"                        
                    }
                },
                where: { id }
            });
            console.log(campaignTmp)

            const campaign = getRepository(Campaign).merge(campaignTmp[0], request.body)
            const result = await getRepository(Campaign).save(campaign)

            return response.status(200).json(result)
        } catch (e) {
            return response.status(400).json(e)
        }
    },
    async destroy(request: Request, response: Response){
        const { id } = request.params;
        try {
            const deleteCampaing = await getRepository(Campaign).delete(id)
            
            return response.status(200).json(deleteCampaing)
        } catch (e) {
            return response.status(400).json(e)
        }
    }
}