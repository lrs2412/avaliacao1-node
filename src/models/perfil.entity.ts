import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import User from './user.entity'; // Importa a entidade User

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

  @ManyToOne(() => User, user => user.perfis) // Define a relação ManyToOne com a entidade User
  user!: User; // Adiciona a propriedade user
}
