export const getAnimals = async () => {
    const res = await fetch('https://qurbani-hat-data.onrender.com/cattle')
    const data = await res.json()
    return data;
}
