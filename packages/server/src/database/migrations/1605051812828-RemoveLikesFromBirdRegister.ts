import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class RemoveLikesFromBirdRegister1605051812828
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropColumn('birds_registers', 'likes');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'birds_registers',
      new TableColumn({
        name: 'likes',
        type: 'integer',
        default: 0
      })
    );
  }
}
