import SQLite from 'react-native-sqlite-storage';


//const db = SQLite.openDatabase({ name: 'apporcamento.sqlite', createFromLocation: 1});

const db = SQLite.openDatabase("apporcamento.db", "1.0", "App Orcamento", 200000, openCB, errorCB);

function errorCB(err) {
    console.log("SQL Error: " + err);
}

function openCB() {
    console.log("Database OPENED");
}

class Database {
     static init() {
        db.transaction((tx) => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS clientes (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nome TEXT,
          razaoSocial TEXT,
          cnpj INTEGER,
          telefone INTEGER,
          rua TEXT,
          numero INTEGER,
          cidade TEXT,
          contatoResponsavel TEXT,
          telefoneResponsavel INTEGER
        );`
            );
        });
     }

    static insertCliente(clienteData, successCallback, errorCallback) {
        db.transaction((tx) => {
            const { nome, razaoSocial, cnpj, telefone, rua, numero, cidade, contatoResponsavel, telefoneResponsavel } = clienteData;

            tx.executeSql(
                `INSERT INTO clientes (nome, razaoSocial, cnpj, telefone, rua, numero, cidade, contatoResponsavel, telefoneResponsavel)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);`,
                [nome, razaoSocial, cnpj, telefone, rua, numero, cidade, contatoResponsavel, telefoneResponsavel],
                (_, resultSet) => {
                    if (successCallback) {
                        successCallback(resultSet);
                    }
                },
                (_, error) => {
                    if (errorCallback) {
                        errorCallback(error);
                    }
                    return false;
                }
            );
        });
    }
}

export default Database;
