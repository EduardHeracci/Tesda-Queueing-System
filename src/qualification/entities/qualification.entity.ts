import { NationalCertificateLevel } from 'src/national-certificate-level/entities/national-certificate-level.entity';
import { Sector } from 'src/sector/entities/sector.entity';
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

  @OneToMany(() => Sector, (sector) => sector.qualification)
  sector: Sector[];
}
