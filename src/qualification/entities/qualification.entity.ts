import { TraineeInfo } from 'src/trainee-info/entities/trainee-info.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Qualification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => TraineeInfo, (traineeInfo) => traineeInfo.qualification)
  traineeInfo: TraineeInfo[];
}
