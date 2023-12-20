import { describe, test, expect, it, beforeAll, vi } from "vitest";
import{JSDOM} from "jsdom"
import { getFact, fact } from "../src/js/getfact.js";



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
it("should contain un button to get a new random facts",()=>{
    expect(document.getElementById("get-fact-btn")).toBeDefined();
})

it("should have a function to receive new random facts", ()=>{
    expect(typeof getFact).toBe('function');
})

it("should have a getFact function that return an object called fact", ()=>{
    expect(typeof getFact()).toBe('object');
})

// it('should update the DOM with the retrieved fact', async () => {
//     const updatedFact = await getFact();
//     expect(updatedFact).toContain();

//   });

})

