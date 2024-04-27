import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('string', { nullable: false })
  username: string;

  @Column('string', { nullable: false })
  content: string;
}
