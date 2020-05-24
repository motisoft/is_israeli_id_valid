import { assert, assertEquals } from "./test_deps.ts";
import { isIsraeliIdValid } from "./mod.ts";

Deno.test("is function", (): void => {
  assertEquals(typeof isIsraeliIdValid, "function");
});

Deno.test("is ID valid", (): void => {
  assert(isIsraeliIdValid("18"), "18 should be a valid ID");  
  assert(isIsraeliIdValid(" 231740705 "), "' 231740705 ' should be a valid ID"); 
});

Deno.test("ID is not valid", (): void => {
    assert(!isIsraeliIdValid(""), "empty string should not be valid"); 
    assert(!isIsraeliIdValid("1 8"), "'1 8' should not be valid"); 
    assert(!isIsraeliIdValid("dfkguhf"), "'dfkguhf' should not be valid"); 
    assert(!isIsraeliIdValid("206663088"), "'206663088' should not be valid"); 
    assert(!isIsraeliIdValid("2317407055"), "'2317407055' should not be valid"); 
    assert(!isIsraeliIdValid("23174070 5"), "'23174070 5' should not be valid"); 
  });
  