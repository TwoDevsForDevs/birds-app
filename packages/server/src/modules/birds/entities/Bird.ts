import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { Expose } from 'class-transformer';
import BirdRegister from '../../birdsRegisters/entities/BirdRegister';

import Conservation from '../../conservations/entities/Conservation';
import Habitat from '../../habitats/entities/Habitat';
import Diet from '../../diets/entities/Diet';

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

  @Column('uuid')
  conservation_id: string;

  @ManyToOne(() => Conservation)
  @JoinColumn({ name: 'conservation_id' })
  conservation: Conservation;

  @Column('uuid')
  habitat_id: string;

  @ManyToOne(() => Habitat)
  @JoinColumn({ name: 'habitat_id' })
  habitat: Habitat;

  @Column('uuid')
  diet_id: string;

  @ManyToOne(() => Diet)
  @JoinColumn({ name: 'diet_id' })
  diet: Diet;

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
