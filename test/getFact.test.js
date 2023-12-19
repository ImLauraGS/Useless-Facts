import { describe, test, expect, it, beforeAll, vi } from "vitest";
import{JSDOM} from "jsdom"
import { showFav, showMenu} from "../src/js/btn.js";
import { getFact } from "../src/js/getfact.js";
import { addToFavorites } from "../src/js/list.js";
import { uncheckFavBtn } from "../src/js/star-btn.js";


describe("home page test", () => {
    let dom
    let window
    let document

    beforeAll(async () => {
        dom = await JSDOM.fromFile("../index.html", {
            resources: "usable",
            runScripts: "dangerously"
        })
        window = dom.window
        document = dom.window.document
})
it("should contain un button to get a new random facts",()=>{
    expect(document.getElementById("get-fact-btn")).toBeDefined();
})

it("should have a function to receive new random facts", ()=>{
    expect(typeof getFact).toBe('function');
})

it("should have a getFact function that return an object called fact", ()=>{
    expect(typeof getFact()).toBe('object');
})

})



