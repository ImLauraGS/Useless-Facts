let fact;

async function getFact() {
    const response = await fetch("https://uselessfacts.jsph.pl/random.json");
    const data = await response.json();
    fact = data.text;
    const containerp = document.getElementById("random-fact");
    containerp.textContent = fact;
    return fact;
}

export { getFact, fact };

