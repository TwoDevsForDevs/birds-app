import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddAdminColumnToUsers1606856552648
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'admin',
        type: 'boolean',
        default: false
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropColumn('users', 'admin');
  }
}
