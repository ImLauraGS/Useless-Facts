async function getFact(){
    const response=await fetch ("https://uselessfacts.jsph.pl/random.json")
    const data=await response.json()
    const fact=data.text
    
    const containerp=document.getElementById("random-fact")
    containerp.textContent=fact
}

export {getFact}
