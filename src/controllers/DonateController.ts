import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import { Donate } from '../entity/Donate'

export default {
    async index(request: Request, response: Response){
        const { user, campaign } = request.query     
        
        try {            
            if(user && campaign){
                const donatesByUserCampaign = await getRepository(Donate).find({
                    join: {
                        alias: "donate",
                        leftJoinAndSelect: {
                            user: "donate.user",
                            campaign: "donate.campaign"
                        }
                    },
                    where: { user, campaign }                    
                });
                return response.status(200).json(donatesByUserCampaign)
            }
            if(user){
                const donatesByUser = await getRepository(Donate).find({
                    join: {
                        alias: "donate",
                        leftJoinAndSelect: {
                            user: "donate.user",
                            campaign: "donate.campaign"
                        }
                    },
                    where: { user }                    
                });
                return response.status(200).json(donatesByUser)
            }else if (campaign) {
                const donatesByCampaign = await getRepository(Donate).find({
                    join: {
                        alias: "donate",
                        leftJoinAndSelect: {
                            user: "donate.user",
                            campaign: "donate.campaign"
                        }
                    },
                    where: { campaign }                    
                });
                return response.status(200).json(donatesByCampaign)
            }else {
                return response.status(400).json({Message: 'inform user/campaign'})
            }
        } catch (e) {            
            return response.status(400).json(e)
        }
    },
    async create(request: Request, response: Response){
        try{
            const donate = getRepository(Donate).create(request.body)
            const result = await getRepository(Donate).save(donate)

            return response.status(200).json(result);
        } catch(e){
            return response.status(400).json(e)
        }
    }
}