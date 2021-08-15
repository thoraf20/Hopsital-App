import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity()
class PatientTest extends BaseEntity{
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public patient_id: number;
  
  @Column()
    public lab_scientist_id: number;
  
  @Column()
  public doctor_id: number;
  
  @Column({
    type: 'timestamp',
  })
  time_of_reg: Date;

  @Column({
    type: 'timestamp',
  })
  return_date: Date;

  @Column()
  public test_result: string;

  @Column()
  public height: string;

  @Column()
  public comment: string;

  @Column()
  public fee: number;

}
 
export default PatientTest;