import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from './User'
import { Campaign } from './Campaign'


@Entity()
export class Donate {

    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(type => User, { nullable: false })
    user!: User;
    
    @ManyToOne(type => Campaign, { nullable: false })
    campaign!: Campaign;

    @Column("decimal", { precision: 5, scale: 2, default:0, nullable: false })
    value!: number;
}