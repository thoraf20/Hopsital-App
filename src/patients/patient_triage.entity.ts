import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity()
class PatientTriage extends BaseEntity{
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

}
 
export default PatientTriage;