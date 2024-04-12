import { MigrationInterface, QueryRunner } from "typeorm";

export class Accounts1712945271802 implements MigrationInterface {
    name = 'Accounts1712945271802'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`account_model\` (\`uuid\` varchar(255) NOT NULL, \`createdAt\` datetime NOT NULL, \`updatedAt\` datetime NOT NULL, \`clientUuid\` varchar(255) NULL, PRIMARY KEY (\`uuid\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`account_model\` ADD CONSTRAINT \`FK_a6f5929fbc63cb5849895a8702e\` FOREIGN KEY (\`clientUuid\`) REFERENCES \`client\`(\`uuid\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`account_model\` DROP FOREIGN KEY \`FK_a6f5929fbc63cb5849895a8702e\``);
        await queryRunner.query(`DROP TABLE \`account_model\``);
    }

}
