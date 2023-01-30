import { Request, Response } from "express";
import { Ninja, UpdateNinja } from "../protocols/ninja.js";
import ninjaService from "../services/ninjas-services.js";

export async function insertNinja(req: Request, res: Response) {
    const newNinja = req.body as Ninja;

    // const { error } = ninjaSchema.validate(newNinja);

    // if(error) {
    //     return res.status(400).send(error.message);
    // }

    // const queryName = await connectionDB.query(`
    //     SELECT * FROM ninjas WHERE name = $1;
    // `, [newNinja.name]);

    // if(queryName.rows.length > 0) {
    //     return res.sendStatus(409);
    // }

    try {
        const ninja = await ninjaService.createNinja(newNinja);
        return res.send(201).send(ninja);
    } catch (error) {
        return res.status(500).send(error.message);
    } 
}

export async function selectNinjas(req: Request, res:Response) {
    const ninjas = await ninjaService.findNinjas();
    res.status(200).send(ninjas);
}

export async function updateNinja(req: Request, res:Response) {
    const updateNinja = req.body as UpdateNinja;

    try {
        // const queryNinjaName = await connectionDB.query(`
        //     SELECT * FROM ninjas WHERE name = $1;
        // `, [newNinja.name]);

        // if(queryNinjaName.rows.length === 0) {
        //     return res.sendStatus(404);
        // }
        
        const update = await ninjaService.updateNinja(updateNinja);
        return res.send(200).send(update);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export async function deleteNinja(req: Request, res:Response) {
    const id = req.body as number;

    try {
        if(!deleteNinja) {
            res.sendStatus(404);
        }
        
        await ninjaService.deleteNinja(id);
        res.sendStatus(200);
    } catch (error) {
     return res.status(500).send(error.message);   
    }
}

export async function selectNinjaById(req: Request, res:Response) {
    const { id } = req.params;
    const ninjas = await ninjaService.selectNinjaById(Number(id));
    res.status(200).send(ninjas);
}