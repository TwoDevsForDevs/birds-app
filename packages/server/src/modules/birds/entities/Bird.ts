import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';
import { Expose } from 'class-transformer';

@Entity('birds')
class Bird {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Expose({ name: 'image_url' })
  getImageUrl(): string | null {
    return this.image ? `http://localhost:3333/files/${this.image}` : null;
  }
}

export default Bird;
