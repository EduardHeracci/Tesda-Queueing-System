import { Qualification } from 'src/qualification/entities/qualification.entity';
import { TraineeInfo } from 'src/trainee-info/entities/trainee-info.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Sector {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Qualification, (qualification) => qualification.sector)
  qualification: Qualification;

  @OneToMany(() => TraineeInfo, (traineeInfo) => traineeInfo.sector)
  traineeInfo: TraineeInfo[];
}
