import { TraineeInfo } from 'src/trainee-info/entities/trainee-info.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Personnel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  middleName: string;

  @Column()
  lastName: string;

  @Column()
  userName: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @OneToMany(() => TraineeInfo, (traineeInfo) => traineeInfo.personnel)
  traineeInfo: TraineeInfo[];
}
