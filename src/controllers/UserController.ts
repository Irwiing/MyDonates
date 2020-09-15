import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import { User } from '../entity/User';

export default {
    async index(request: Request, response: Response){
        try {
            const users = await getRepository(User).find();
            return response.json(users)
        } catch (e) {            
            return response.status(400).json(e)
        }
    },

    async create(request: Request, response: Response){
        try{
            const user = getRepository(User).create(request.body)
            const result = await getRepository(User).save(user)
            return response.status(200).json(result);
        } catch(e){
            return response.status(400).json(e)
        }
    }
}