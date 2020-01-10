/* eslint-disable no-unused-vars */
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import Appointment from './Appointment'

@Entity()
export default class Doctor extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    firstName!: string

    @Column()
    lastName!: string

    @Column()
    email!: string

    @Column()
    degree!: string

    @OneToMany(type => Appointment, appointment => appointment.doctor)
    appointments?: Appointment[];
}