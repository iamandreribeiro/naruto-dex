import { connectionDB } from "../database/db.js";
import { Ninja, NinjaEntity } from "../protocols/ninja.js";
import { QueryResult } from "pg";

export function findMany(): Promise<QueryResult<NinjaEntity>> {
    return connectionDB.query(`SELECT * FROM ninjas;`);
}

export function insertUnique(newNinja: Ninja): Promise<QueryResult<Ninja>> {
    return connectionDB.query(`
        INSERT INTO ninjas (name, clan, jutsu) VALUES ($1, $2, $3);
    `,[newNinja.name, newNinja.clan, newNinja.jutsu]);
}

export function updateUnique(newNinja: Ninja): Promise<QueryResult<Ninja>> {
    return connectionDB.query(`
        UPDATE ninjas SET name = $1, clan = $2, jutsu = $3 WHERE name = $1;
    `, [newNinja.name, newNinja.clan, newNinja.jutsu]);
}

export function deleteUnique(name: Ninja): Promise<QueryResult<Ninja>> {
    return connectionDB.query(`
        DELETE FROM ninjas WHERE name = $1;
    `, [name]);
}

export function findById(id): Promise<QueryResult<NinjaEntity>> {
    return connectionDB.query(`
        SELECT * FROM ninjas WHERE id = $1;
    `, [id]);
}