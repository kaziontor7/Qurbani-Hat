export const getAnimals = async (server) => {
    const res = await fetch(server)
    const data = await res.json()
    return await data;
}
