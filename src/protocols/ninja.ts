export type NinjaEntity = {
    name: string,
    clan: string,
    jutsu: string,
    createdAt: Date,
}

export type Ninja = Omit<NinjaEntity, "createdAt">

export type UpdateNinja = {
    id: number,
    name: string,
    clan: string,
    jutsu: string,
}