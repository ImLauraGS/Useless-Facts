import { describe, test, expect, it, beforeAll, vi } from "vitest";
import{JSDOM} from "jsdom"
import { showFav, showMenu} from "../src/js/btn.js";



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
    it("showFav should be a function",()=>{
        expect(typeof showFav).toBe('function')
    })

    it("showMenu should be a function",()=>{
        expect(typeof showMenu).toBe('function')
    })


    it("showFav should have defined random-fact-page and favorites-page",()=>{
        expect(document.getElementById("random-fact-page")).toBeDefined();
        expect(document.getElementById("favorites-page")).toBeDefined();
    })

    it("should contain a class named 'favorites-page' ",()=>{
        const favoritePage = document.getElementById('favorites-page');
        expect(favoritePage.classList).toContain('favorites-page')
    })

    // it("should contain a class named 'favorites-page' ",()=>{
    //     const favoritePage = document.getElementById('favorites-page');
    //     const computedStyle = window.getComputedStyle(favoritePage);
    //     expect(computedStyle.getPropertyValue('display')).toEqual('none');
    // })

    it("should contain more than one element with a class named 'menu-drop' ",()=>{
        const optionMenus = document.getElementsByClassName("menu-drop");
        expect(optionMenus.length).toBeGreaterThan(0)
    })

})
