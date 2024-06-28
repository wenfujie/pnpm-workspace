import { describe, expect, it } from "vitest";
import { num } from "../src";

describe("num tests", () => {
  it("formatCurrency 货币转换", () => {
    expect(num.formatCurrency(123456.111)).toEqual("123,456.111");
  });
});
