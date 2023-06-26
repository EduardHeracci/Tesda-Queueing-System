import { Qualification } from 'src/qualification/entities/qualification.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class NationalCertificateLevel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(
    () => Qualification,
    (qualification) => qualification.nationalCertificateLevel,
  )
  qualification: Qualification[];
}
