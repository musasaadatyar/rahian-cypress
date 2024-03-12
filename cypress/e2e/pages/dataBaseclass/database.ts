export type TDataCreateTable = {
    databaseName: string,
    tableName: string,
    tableColumn: TTableColumn[],
}

export type TTableColumn =
    {
        columnName: string,
        typeColumn: string,
        maxLength?: number | 0
    }

export type TDataNeedToInsertTable = {
    databaseName: string,
    tableName: string,
    columnsName: string[],
    columnsTableValue: any[]
}

export type TDataForUpdate = {
    databaseName: string,
    tableName: string ,
    columnNameNeedToUpdate: string,
    valueToBeUpdate: string | number,
    nameColumnEqual: string ,
    valueColumnEqual: string | number
}

export type TDataForDelete = {
    databaseName: string,
    tableName: string,
    columnName: string,
    dataColumnEqual: string,
}

export type TUserLoginInfo = {
    nationalCode: string |number;
    password: string
}
export class DataBseFunctions {
    createDatabase(nameDataBase: string) {
        return `create database ${nameDataBase}`
    }

    dropTable(nameDataBase: string, tableName: string) {
        return `drop table ${nameDataBase}.${tableName}`

    }

    createTable(infoCreatTable: TDataCreateTable) {
        let columns = '';
        for (let columnDetails of infoCreatTable.tableColumn) {
            let havePrent = columnDetails.maxLength ? `(${columnDetails.maxLength})` : ``
            columns += `${columnDetails.columnName} ${columnDetails.typeColumn}${havePrent},`
        }
        columns = this.splitLastComa(columns);
        return `CREATE TABLE ${infoCreatTable.databaseName}.${infoCreatTable.tableName}(${columns})`
    }

    //dont work
    insertValuesInTable(dataNeedToInsertTable: TDataNeedToInsertTable) {
        let columnNames: string = ``;
        let getColumnValue = ``;
        for (let colName of dataNeedToInsertTable.columnsName) {
            columnNames += `${colName},`
        }
        columnNames = this.splitLastComa(columnNames)

        for (let objValue of dataNeedToInsertTable.columnsTableValue) {
            getColumnValue += `(${Object.values(objValue).join()}),`
        }
        getColumnValue = this.splitLastComa(getColumnValue)
        return `INSERT INTO ${dataNeedToInsertTable.databaseName}.${dataNeedToInsertTable.tableName} (${columnNames})
        VALUES
        ${getColumnValue}`
    }

    getRowFromTable(dataBaseName: string, tableName: string, DataExistWithValue: any) {
        return `select * from ${dataBaseName}.${tableName} where ${DataExistWithValue}`
    }

    upDateRowInTable(dataForUpdate:TDataForUpdate) {
        return `update ${dataForUpdate.databaseName}.${dataForUpdate.tableName} set ${dataForUpdate.columnNameNeedToUpdate}="${dataForUpdate.valueToBeUpdate}" where ${dataForUpdate.nameColumnEqual}="${dataForUpdate.valueColumnEqual}"`
    }

    deleteRowFromTable(dataForDelete:TDataForDelete){
        return `delete from ${dataForDelete.databaseName}.${dataForDelete.tableName} where ${dataForDelete.columnName}="${dataForDelete.dataColumnEqual}"`
    }

    getUserNationalCodeAndPassword(nationalCode: string | number){
         return `select * from rh.user where ${nationalCode.toString}`
    }

    splitLastComa(value: any) {
        return value.substring(0, value.lastIndexOf(','));
    }
}

