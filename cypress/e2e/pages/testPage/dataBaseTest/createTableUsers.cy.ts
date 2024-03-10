import {
    TDataCreateTable,
    DataBseFunctions,
    TDataNeedToInsertTable,
    TDataForUpdate,
    TDataForDelete
} from "../../dataBaseclass/database";

let databaseFunction = new DataBseFunctions()

describe('about dataBase', () => {
    it.only('drop table', () => {
        cy.task('queryDb', databaseFunction.dropTable('rh', 'users'))
    });

    it('create table for user', () => {
        let tableDetails: TDataCreateTable = {
            databaseName: 'rh',
            tableName: 'users',
            tableColumn: [
                {
                    columnName: 'userId',
                    typeColumn: 'varchar',
                    maxLength: 10
                },
                {
                    columnName: 'nationalCode',
                    typeColumn: 'varchar',
                    maxLength: 255
                },
                {
                    columnName: 'password',
                    typeColumn: 'varchar',
                    maxLength: 255
                },
                {
                    columnName: 'role',
                    typeColumn: 'varchar',
                    maxLength: 255
                },
                {
                    columnName: 'organization',
                    typeColumn: 'varchar',
                    maxLength: 255
                }
            ]
        }
        cy.task('queryDb', databaseFunction.createTable(tableDetails))
    });

    it('insert Value in table', () => {
        let dataNeedInsertTable: TDataNeedToInsertTable = {
            databaseName: 'rh',
            tableName: 'users',
            columnsName: ['nationalCode', 'password', 'role', 'organization'],
            columnsTableValue: [
                {
                    "کد ملی": "9390086493",
                    "password": "1q2w3E*",
                    "نقش": "ادمین  راویان",
                    "رده": "ستاد راویان"
                },
                {
                    "کد ملی": "9345721983",
                    "password": "1q2w3E*",
                    "نقش": "مسئول برنامه ریزی",
                    "رده": "ستاد راویان   قرارگاه ارتش"
                },
                {
                    "کد ملی": "9585981076",
                    "password": "1q2w3E*",
                    "نقش": "مسئول برنامه ریزی",
                    "رده": "ستاد راویان   قرارگاه سپاه"
                },
                {
                    "کد ملی": "7267670318",
                    "password": "1q2w3E*",
                    "نقش": "مسئول برنامه ریزی",
                    "رده": "پایگاه بسیج شهید زین الدین"
                },
                {
                    "کد ملی": "7962977655",
                    "password": "1q2w3E*",
                    "نقش": "مسئول ثبت برنامه گواهی",
                    "رده": "ستاد راویان   قرارگاه ارتش"
                },
                {
                    "کد ملی": "1405407964",
                    "password": "1q2w3E*",
                    "نقش": "مسئول ثبت برنامه گواهی",
                    "رده": "ستاد راویان   قرارگاه سپاه"
                },
                {
                    "کد ملی": "7146377334",
                    "password": "1q2w3E*",
                    "نقش": "مسئول ثبت برنامه گواهی",
                    "رده": "ستاد راویان   قرارگاه سپاه"
                },
                {
                    "کد ملی": "6142855291",
                    "password": "1q2w3E*",
                    "نقش": "مسئول گزینش راویان",
                    "رده": "ستاد راویان   قرارگاه ارتش"
                },
                {
                    "کد ملی": "5902698049",
                    "password": "1q2w3E*",
                    "نقش": "مسئول گزینش راویان",
                    "رده": "ستاد راویان   قرارگاه سپاه"
                },
                {
                    "کد ملی": "9201101015",
                    "password": "1q2w3E*",
                    "نقش": "مسئول گزینش راویان",
                    "رده": "پایگاه بسیج شهید زین الدین"
                },
                {
                    "کد ملی": "1110110103",
                    "password": "1q2w3E*",
                    "نقش": "کارشناس مصاحبه",
                    "رده": "ستاد راویان   قرارگاه سپاه"
                },
                {
                    "کد ملی": "4201000117",
                    "password": "1q2w3E*",
                    "نقش": "کارشناس مصاحبه",
                    "رده": "پایگاه بسیج شهید زین الدین"
                },
                {
                    "کد ملی": "5200100003",
                    "password": "1q2w3E*",
                    "نقش": "کارشناس استعلامات",
                    "رده": "ستاد راویان   قرارگاه ارتش"
                },
                {
                    "کد ملی": "7210001018",
                    "password": "1q2w3E*",
                    "نقش": "کارشناس استعلامات",
                    "رده": "ستاد راویان   قرارگاه سپاه"
                },
                {
                    "کد ملی": "7411111015",
                    "password": "1q2w3E*",
                    "نقش": "کارشناس استعلامات",
                    "رده": "پایگاه بسیج شهید زین الدین"
                },
                {
                    "کد ملی": "4001010003",
                    "password": "1q2w3E*",
                    "نقش": "پیش فرض",
                    "رده": "پیش فرض"
                },
                {
                    "کد ملی": "5320111101",
                    "password": "1q2w3E*",
                    "نقش": "مسئول ثبت برنامه همکاری",
                    "رده": "ستاد راویان   قرارگاه سپاه"
                },
                {
                    "کد ملی": "9223632196",
                    "password": "1q2w3E*",
                    "نقش": "مسئول ثبت برنامه همکاری",
                    "رده": "ستاد راویان   قرارگاه ارتش"
                },
                {
                    "کد ملی": "0620983035",
                    "password": "1q2w3E*",
                    "نقش": "متقاضی کارشناس ",
                    "رده": "ستاد راویان   قرارگاه سپاه"
                },
                {
                    "کد ملی": "0574638865",
                    "password": "1q2w3E*",
                    "نقش": "متقاضی کارشناس ",
                    "رده": "ستاد راویان   قرارگاه ارتش"
                },
                {
                    "کد ملی": "5749164136",
                    "password": "1q2w3E*",
                    "نقش": "مسئول مشاهده اعلام همکاری",
                    "رده": "ستاد راویان   قرارگاه ارتش"
                },
                // {
                //     "id":22,
                //     "کد ملی": "2456204697",
                // "password":"1q2w3E*",
                //     "نقش": "مسئول مشاهده اعلام همکاری"
                // }
            ]
        }
        cy.task('queryDb', databaseFunction.insertValuesInTable(dataNeedInsertTable))
    });

    it('get value from table', () => {
        cy.task('queryDb', databaseFunction.getRowFromTable('rh', 'users', 'nationalCode = 9390086493')).then((el$: any) => {
            expect(el$[0].nationalCode).to.equal('9390086493')
        })
    });

    it('update row', () => {
        let dataNeedToUpdate: TDataForUpdate = {
            databaseName: "rh",
            tableName: "users",
            columnNameNeedToUpdate: "role",
            valueToBeUpdate: 'ادمینن',
            nameColumnEqual: "nationalCode",
            valueColumnEqual: 9390086493,
        }
        cy.task('queryDb', databaseFunction.upDateRowInTable(dataNeedToUpdate))
    });

    it('delete Row from table', () => {
        let dataForDelete: TDataForDelete = {
            columnName: "nationalCode",
            dataColumnEqual: "2456204697",
            databaseName: "rh",
            tableName: "users"
        }

        cy.task('queryDb', databaseFunction.deleteRowFromTable(dataForDelete))
    })
});