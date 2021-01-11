import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateBirds1600125863654 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'birds',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'popular_name',
            type: 'varchar'
          },
          {
            name: 'scientific_name',
            type: 'varchar',
            isUnique: true
          },
          {
            name: 'conservation_id',
            type: 'uuid'
          },
          {
            name: 'habitat_id',
            type: 'uuid'
          },
          {
            name: 'diet_id',
            type: 'uuid'
          },
          {
            name: 'image',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'wikiaves_link',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'status',
            type: 'boolean',
            default: true
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          }
        ],
        foreignKeys: [
          {
            name: 'Conservation',
            referencedTableName: 'conservations',
            referencedColumnNames: ['id'],
            columnNames: ['conservation_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
          },
          {
            name: 'Habitat',
            referencedTableName: 'habitats',
            referencedColumnNames: ['id'],
            columnNames: ['habitat_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
          },
          {
            name: 'Diet',
            referencedTableName: 'diets',
            referencedColumnNames: ['id'],
            columnNames: ['diet_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('birds');
  }
}
