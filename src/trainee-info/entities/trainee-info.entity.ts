import { Personnel } from 'src/personnel/entities/personnel.entity';
import { Sector } from 'src/sector/entities/sector.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TraineeInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  middleName: string;

  @Column()
  lastName: string;

  @Column()
  suffix: string;

  @Column()
  address: string;

  @Column()
  telephoneNumber: string;

  @Column()
  dateOfBirth: string;

  @Column()
  placeOfBirth: string;

  @Column()
  civilStatus: string;

  @Column()
  gender: string;

  @Column()
  weight: string;

  @Column()
  height: string;

  @Column()
  distinguishingMarks: string;

  @Column()
  spouseName: string;

  @Column()
  motherName: string;

  @Column()
  fatherName: string;

  @ManyToOne(() => Personnel, (personnel) => personnel.traineeInfo)
  personnel: Personnel;

  @ManyToOne(() => Sector, (sector) => sector.traineeInfo)
  sector: Sector;
}
