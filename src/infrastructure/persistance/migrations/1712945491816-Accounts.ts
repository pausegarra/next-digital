import { MigrationInterface, QueryRunner } from "typeorm";

export class Accounts1712945491816 implements MigrationInterface {
    name = 'Accounts1712945491816'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`movement_model\` (\`uuid\` varchar(255) NOT NULL, \`movementType\` varchar(255) NOT NULL, \`ammount\` float NOT NULL, \`createdAt\` datetime NOT NULL, \`updatedAt\` datetime NOT NULL, \`accountUuid\` varchar(255) NULL, PRIMARY KEY (\`uuid\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`account_model\` DROP FOREIGN KEY \`FK_a6f5929fbc63cb5849895a8702e\``);
        await queryRunner.query(`ALTER TABLE \`account_model\` CHANGE \`clientUuid\` \`clientUuid\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`account_model\` ADD CONSTRAINT \`FK_a6f5929fbc63cb5849895a8702e\` FOREIGN KEY (\`clientUuid\`) REFERENCES \`client\`(\`uuid\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`movement_model\` ADD CONSTRAINT \`FK_bb14060e340c2749189f12df9e2\` FOREIGN KEY (\`accountUuid\`) REFERENCES \`account_model\`(\`uuid\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`movement_model\` DROP FOREIGN KEY \`FK_bb14060e340c2749189f12df9e2\``);
        await queryRunner.query(`ALTER TABLE \`account_model\` DROP FOREIGN KEY \`FK_a6f5929fbc63cb5849895a8702e\``);
        await queryRunner.query(`ALTER TABLE \`account_model\` CHANGE \`clientUuid\` \`clientUuid\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`account_model\` ADD CONSTRAINT \`FK_a6f5929fbc63cb5849895a8702e\` FOREIGN KEY (\`clientUuid\`) REFERENCES \`client\`(\`uuid\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`DROP TABLE \`movement_model\``);
    }

}
