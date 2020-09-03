import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Campaign } from './Campaign'
import { Donate } from "./Donate";


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    username!: string;

    @Column()
    whatsapp!: string;

    @Column()
    email!: string;

    @OneToMany(type => Campaign, campaign => campaign.user)
    campaign!: Campaign[];

    @OneToMany(type => Donate, donate => donate.user)
    donate!: Donate[];
}