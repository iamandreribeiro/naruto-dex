import { Ninja, UpdateNinja } from "../protocols/ninja.js";
import prisma from "../database/db.js";

async function findMany() {
    return prisma.ninjas.findMany();
}

async function insertUnique(newNinja: Ninja) {
    return prisma.ninjas.create({
        data: {
            name: newNinja.name,
            clan: newNinja.clan,
            jutsu: newNinja.jutsu
        }
    });
}

async function updateUnique(newNinja: UpdateNinja) {
    return prisma.ninjas.update({
        where: {
            id: newNinja.id
        },
        data: {
            name: newNinja.name,
            clan: newNinja.clan,
            jutsu: newNinja.jutsu
        }
    });
}

async function deleteUnique(id: number) {
    prisma.ninjas.delete({
        where: {
            id
        }
    })
}
async function findById(id) {
    return prisma.ninjas.findFirst({
        where: {
            id
        }
    });
}

const ninjaRepository = {
    findMany,
    insertUnique, 
    updateUnique, 
    deleteUnique, 
    findById
}

export default ninjaRepository;