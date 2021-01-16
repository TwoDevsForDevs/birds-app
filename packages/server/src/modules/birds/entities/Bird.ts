import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';
import { Expose } from 'class-transformer';
import BirdRegister from '../../birdsRegisters/entities/BirdRegister';

@Entity('birds')
class Bird {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => BirdRegister, register => register.bird)
  registers: BirdRegister[];

  @Column('varchar')
  popular_name: string;

  @Column('varchar')
  scientific_name: string;

  @Column('varchar')
  conservation: string;

  @Column('varchar')
  habitat: string;

  @Column('varchar')
  diet: string;

  @Column('varchar')
  image: string;

  @Column('varchar')
  wikiaves_link: string;

  @Column('boolean')
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Expose({ name: 'image_url' })
  getImageUrl(): string | null {
    return this.image ? `${process.env.APP_API_URL}/files/${this.image}` : null;
  }
}

export default Bird;
