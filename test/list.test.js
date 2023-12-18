import { describe, test, expect, it, beforeAll, vi } from "vitest";
import{JSDOM} from "jsdom"
import { addToFavorites } from "../src/js/list.js";



describe("home page test", () => {
    let dom
    let window
    let document

    beforeAll(async () => {
        dom = await JSDOM.fromFile("./index.html", {
            resources: "usable",
            runScripts: "dangerously"
        })
        window = dom.window
        document = dom.window.document
    })
    it("addToFavorites should be a function",()=>{
        expect(typeof addToFavorites).toBe('function')
    })

    it("innerHTML to generate longer than 1 ",()=>{
        const favoritesList = document.getElementById('favorites-list');
        expect(favoritesList.innerHTML.length).toBeGreaterThan(1)
    })
    it("innerHTML to be a string",()=>{
        const favoritesList = document.getElementById('favorites-list');
        expect(typeof(favoritesList.innerHTML)).toBe('string')
    })

})
