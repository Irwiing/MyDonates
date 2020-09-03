import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable} from "typeorm";
import { User } from './User'
import { Campaign } from './Campaign'


@Entity()
export class Donate {

    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(type => User)
    user!: User;
    
    @ManyToOne(type => Campaign)
    campaign!: Campaign;

    @Column("decimal", { precision: 5, scale: 2, default:0, nullable: false })
    value!: number;
}