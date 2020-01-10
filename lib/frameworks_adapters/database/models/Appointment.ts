/* eslint-disable no-unused-vars */
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne} from 'typeorm'
import Doctor from './Doctor'
import Patient from './Patient'

@Entity()
export default class Appointment extends BaseEntity{

  @PrimaryGeneratedColumn()
  id!: number

  @ManyToOne(type => Patient, patient => patient.appointments)
  @JoinColumn()
  patient!: Patient

  @Column()
  email!: string

  @ManyToOne(type => Doctor, doctor => doctor.appointments)
  @JoinColumn()
  doctor!: Doctor
}
