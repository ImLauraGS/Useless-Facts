import { describe, test, expect, it, beforeAll, vi } from "vitest";
import{JSDOM} from "jsdom"
import { uncheckFavBtn } from "../src/js/star-btn.js";



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
    it("uncheckFavBtn should be a function",()=>{
        expect(typeof uncheckFavBtn).toBe('function')
    })

    it("stars should be defined' ",()=>{
        let stars = document.getElementsByClassName('starbtn');
        expect(stars).toBeDefined()
    })


})
