/* eslint-disable no-unused-vars */
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import Appointment from './Appointment'

/*
    id
    first name
    last name
    address
    email
    dateOfBirth
    sex
    phone
*/

@Entity()
export default class Patient extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    firstName!: string

    @Column()
    lastName!: string

    @Column()
    address!: string

    @Column()
    email!: string

    @Column()
    dateOfBirth!: Date

    @Column()
    sex!: string

    @Column()
    phone!: number

    @OneToMany(type=> Appointment, appointment => appointment.patient)
    appointments?: Appointment
}