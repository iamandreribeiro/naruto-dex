import { Request, Response } from "express";
import { connectionDB } from "../database/db.js";
import { Ninja } from "../protocols/ninja.js";
import { ninjaSchema } from "../schemas/ninja-schema.js";
import { deleteUnique, findById, findMany, insertUnique, updateUnique } from "../repositories/ninja-repository.js";

export async function insertNinja(req: Request, res: Response) {
    const newNinja = req.body as Ninja;

    const { error } = ninjaSchema.validate(newNinja);

    if(error) {
        return res.status(400).send(error.message);
    }

    const queryName = await connectionDB.query(`
        SELECT * FROM ninjas WHERE name = $1;
    `, [newNinja.name]);

    if(queryName.rows.length > 0) {
        return res.sendStatus(409);
    }

    try {
        await insertUnique(newNinja);
        return res.sendStatus(201);
    } catch (error) {
        return res.status(500).send(error.message);
    } 
}

export async function selectNinjas(req: Request, res:Response) {
    const ninjas = await findMany();
    res.status(200).send(ninjas.rows);
}

export async function updateNinja(req: Request, res:Response) {
    const newNinja = req.body as Ninja;

    try {
        const queryNinjaName = await connectionDB.query(`
            SELECT * FROM ninjas WHERE name = $1;
        `, [newNinja.name]);

        if(queryNinjaName.rows.length === 0) {
            return res.sendStatus(404);
        }
        
        await updateUnique(newNinja);

        return res.sendStatus(200);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export async function deleteNinja(req: Request, res:Response) {
    const { name } = req.body;

    try {
        const queryNinjaName = await connectionDB.query(`
            SELECT * FROM ninjas WHERE name = $1;
        `, [name]);

        if(queryNinjaName.rows.length === 0) {
            return res.sendStatus(404);
        }

        await deleteUnique(name);

        res.sendStatus(200);
    } catch (error) {
     return res.status(500).send(error.message);   
    }
}

export async function selectNinjaById(req: Request, res:Response) {
    const { id } = req.params;

    const ninjas = await findById(id);

    if(ninjas.rows.length === 0) {
        res.sendStatus(404);
    }

    res.status(200).send(ninjas);
}