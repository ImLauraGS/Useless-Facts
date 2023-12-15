/* async function getFact(){
    const response=await fetch ("https://uselessfacts.jsph.pl/random.json")
    const data=await response.json()
    const fact=data.text
    
    const containerp=document.getElementById("random-fact")
    containerp.textContent=fact

}
export {getFact}
 */

async function getFact() {
    try {
        const response = await fetch("https://uselessfacts.jsph.pl/random.json");
        const data = await response.json();
        const fact = data.text;
        
        const containerp = document.getElementById("random-fact");
        containerp.textContent = fact;

        return fact;
    } catch (error) {
        console.error('Error al obtener el hecho:', error);
        throw error;
    }
}

export { getFact };