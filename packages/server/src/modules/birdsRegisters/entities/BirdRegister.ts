import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { Expose } from 'class-transformer';

import User from '../../users/entities/User';
import Bird from '../../birds/entities/Bird';

@Entity('birds_registers')
class BirdRegister {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  owner_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'owner_id' })
  owner: User;

  @Column('varchar')
  bird_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'bird_id' })
  bird: Bird;

  @Column('varchar')
  image: string;

  @Column('varchar')
  location: string;

  @Column('timestamp with time zone')
  register_date: Date;

  @Column('varchar')
  obs: string;

  @Column('integer')
  likes: number;

  @Column('integer')
  views: number;

  @Column('boolean')
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Expose({ name: 'image_url' })
  getImageUrl(): string | null {
    return this.image ? `http://192.168.0.112:3333/files/${this.image}` : null;
  }
}

export default BirdRegister;
