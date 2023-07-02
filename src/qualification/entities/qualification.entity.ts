import { NationalCertificateLevel } from 'src/national-certificate-level/entities/national-certificate-level.entity';
import { Sector } from 'src/sector/entities/sector.entity';
import { TraineeInfo } from 'src/trainee-info/entities/trainee-info.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Qualification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(
    () => NationalCertificateLevel,
    (nationalCertificateLevel) => nationalCertificateLevel.qualification,
  )
  nationalCertificateLevel: NationalCertificateLevel;

  @ManyToOne(() => Sector, (sector) => sector.qualification)
  sector: Sector;

  @OneToMany(() => TraineeInfo, (traineeInfo) => traineeInfo.qualification)
  traineeInfo: TraineeInfo[];
}
