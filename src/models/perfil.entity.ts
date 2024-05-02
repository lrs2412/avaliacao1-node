import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import User from './user.entity'; 

@Entity()
export default class Perfil extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column()
  idade!: number;

  @Column()
  cpf!: string;

  @Column()
  descricao!: string;

  @ManyToOne(() => User, user => user.perfis) 
  user!: User; 
}
