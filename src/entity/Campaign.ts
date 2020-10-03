import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";

import { User } from './User'
import { Donate } from "./Donate";


@Entity()
export class Campaign {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ nullable: false })
    title!: string;

    @Column({ nullable: false })
    description!: string;

    @Column("decimal", { precision: 10, scale: 2,  nullable: false })
    target!: number;

    @ManyToOne(type => User, user => user.campaign)
    user!: User;

    @OneToMany(type => Donate, donate => donate.campaign)
    donate!: Donate[];
}