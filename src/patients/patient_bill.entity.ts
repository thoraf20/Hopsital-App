import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity()
class PatientBill extends BaseEntity{
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public patient_id: number;
  
  @Column()
    public doctor_charge: number;
  
  @Column()
  public medicine_charge: number;

  @Column()
  public room_charge: number;

  @Column()
  public operation_charge: number;

  @Column()
  public number_of_days: number;

  @Column()
  public nurse_charge: number;

  @Column()
  public advance: number;

  @Column()
  public health_card: string;

  @Column()
  public lab_charge: number;

  @Column()
  public bill: number;

}
 
export default PatientBill;