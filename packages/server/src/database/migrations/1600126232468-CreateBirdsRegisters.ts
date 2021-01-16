import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateBirdsRegisters1600126232468
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'birds_registers',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'owner_id',
            type: 'uuid'
          },
          {
            name: 'bird_id',
            type: 'uuid',
            isNullable: true
          },
          {
            name: 'image',
            type: 'varchar'
          },
          {
            name: 'location',
            type: 'varchar'
          },
          {
            name: 'register_date',
            type: 'timestamp with time zone'
          },
          {
            name: 'obs',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'likes',
            type: 'integer',
            default: 0
          },
          {
            name: 'views',
            type: 'integer',
            default: 0
          },
          {
            name: 'approved',
            type: 'boolean',
            default: false
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
            name: 'Owner',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['owner_id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
          },
          {
            name: 'Bird',
            referencedTableName: 'birds',
            referencedColumnNames: ['id'],
            columnNames: ['bird_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('birds_registers');
  }
}
