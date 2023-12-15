import { describe, test, expect, it, beforeAll } from "vitest";

import { showFav, showMenu} from "../src/js/btn.js";
import { getFact } from "../src/js/getfact.js";
import { addToFavorites } from "../src/js/list.js";
import { uncheckFavBtn } from "../src/js/star-btn.js";

test("expect showFav to be a funtion", () => {
    expect(typeof showFav).toBe('function');
  });
 
test("expect getFact to be function", () => {
    expect(typeof getFact).toBe('function');
  });

test("", () => {
    expect(fact).toBeTypeOf('string')
    ;
  });