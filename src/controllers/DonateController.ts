import { Request, Response } from 'express'
import { getConnection, getRepository, createQueryBuilder, getManager } from 'typeorm'

import { Donate } from '../entity/Donate'

export default {
    async index(request: Request, response: Response){
        const { id } = request.params;        
        try {            
            const donates = await getRepository(Donate).find({
                join: {
                    alias: "donate",
                    leftJoinAndSelect: {
                        user: "donate.user",
                        campaign: "donate.campaign"
                    }
                },
                where: { id }
            });

            return response.status(200).json(donates)
        } catch (e) {            
            return response.json(e)
        }
    },
    async create(request: Request, response: Response){
        try{
            const donate = await getRepository(Donate).create(request.body)
            const result = await getRepository(Donate).save(donate)

            return response.status(200).json(result);
        } catch(e){
            return response.json(e)
        }
    }
}