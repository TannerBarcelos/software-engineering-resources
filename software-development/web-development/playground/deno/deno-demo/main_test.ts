import { assertEquals, assertNotEquals } from "@std/assert";
import { add } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
});

Deno.test(function addTest2() {
  assertNotEquals(add(2, 3), 6);
})
