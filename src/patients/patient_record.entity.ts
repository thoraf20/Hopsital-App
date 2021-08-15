import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity()
class PatientRecord extends BaseEntity{
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column()
  public age: number;

  @Column()
  public marital_status: string;

  @Column()
  public gender: string;

  @Column()
  public LGA: string;

  @Column()
  public state: string;

  @Column()
  public home_address: string;

  @Column()
  public residence_address: string;

  @Column()
  public phone_number: string;

    @Column({ unique: true })
  public email: string;

    @Column()
  public next_of_kin_id: string;

    @Column()
  public comment: string;

    @Column()
  public symptoms: [string];

    @Column()
  public patient: string;

    @Column()
  public patient_type: string;

    @Column({
    type: 'timestamp',
  })
  time_of_reg: Date;

  @Column()
  public admin: string;

}
 
export default PatientRecord;