import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity()
class PatientTriage extends BaseEntity{
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public patient_id: string;

  @Column()
  public nurse_id: string;

  @Column()
  public blood_pressure: string;

  @Column()
  public heart_beat: number;

  @Column()
  public sugar_level: string;

  @Column()
  public height: string;

  @Column()
  public weight: string;

  @Column()
  public comment: string;

  @Column()
  public fee: number;

}
 
export default PatientTriage;