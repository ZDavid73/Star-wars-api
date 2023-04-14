export default async function ApiStar() {
    try {
        const data = await fetch ("https://swapi.dev/api/").then(res => res.json());
        console.log(data)
        return data.results;

    } catch (error) {
        console.log(error)
        
    }
    
}