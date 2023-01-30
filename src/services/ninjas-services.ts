import { Ninja, UpdateNinja } from "../protocols/ninja";
import ninjaRepository from "../repositories/ninja-repository.js";

async function createNinja(newNinja: Ninja) {
    const ninja = await ninjaRepository.insertUnique(newNinja);
    return ninja;
}

async function findNinjas() {
    const ninjas = await ninjaRepository.findMany();
    return ninjas;
}

async function updateNinja(updateNinja: UpdateNinja) {
    const ninjas = await ninjaRepository.updateUnique(updateNinja);
    return ninjas;
}

async function deleteNinja(id: number) {
    const doesNinjaExists = await ninjaRepository.findById(id);
    if(!doesNinjaExists) {
        return false;
    }
    
    await ninjaRepository.deleteUnique(id);
}

async function selectNinjaById(id: number) {
    const ninja = await ninjaRepository.findById(id);
    return ninja;
}

const ninjaService = {
    createNinja,
    findNinjas,
    updateNinja,
    deleteNinja,
    selectNinjaById
}

export default ninjaService;