import { baseQuery } from "./BaseQuery.js";

const dbConnection;
const tableName = "table_name";

const exampleSelectBy = async () => {
    const by = "id";
    const value = 3;
    return await baseQuery(dbConnection, tableName).selectBy(by, value)
        .then((result) => {
        // succes
            console.log("succes! detail: " + result);
        })
        .catch((error) => {
        // warn
            console.log(error);
    })
}

const exampleSelectByMultiple = async () => {
    const by = {
        admin_level: 0,
        banned: 0,
    };
    return await baseQuery(dbConnection, tableName).selectByMultiple(by)
        .then((result) => {
        // succes
            console.log("succes! detail: " + result);
        })
        .catch((error) => {
        // warn
            console.log(error);
    })
}

const exampleInsert = async () => {
    const data = {
        id: 1,
        username: "New User",
        password: "123456"
    };
    return await baseQuery(dbConnection, tableName).insertInto(data)
        .then((result) => {
        // succes
        console.log("succes! add new user. detail: " + result);
        })
        .catch((error) => {
        //warn
        console.log(error);
    })
}

const exampleUpdateBy = async () => {
    const by = "id";
    const value = 1
    const data = {
        username: "Update Name",
        password: "654321",
    };
    return await baseQuery(dbConnection, tableName).updateBy(by, value, data)
        .then((result) => {
        // succes
        console.log("succes! update user. detail: " + result);
        })
        .catch((error) => {
        // warn
        console.log(error);
    })
}

const exampleDeleteBy = async () => {
    const by = "id";
    const value = 1;
    return await baseQuery(dbConnection, tableName).deleteBy(by, value)
        .then((result) => {
        // succes
        console.log("succes! user deleted. detail: " + result);
        })
        .catch((error) => {
        // warn
        console.log(error);
    })
}