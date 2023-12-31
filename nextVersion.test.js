import nextVersion from "./nextVersion";

test("Expect correct update for version 1.2.3", () => {
  expect(nextVersion("1.2.3")).toBe("1.2.4");
});

test("Expect correct update for version 0.9.9", () => {
  expect(nextVersion("0.9.9")).toBe("1.0.0");
});

test("Expect correct update for version 1", () => {
  expect(nextVersion("1")).toBe("2");
});

test("Expect correct update for version 1.2.3.4.5.6.7.8", () => {
  expect(nextVersion("1.2.3.4.5.6.7.8")).toBe("1.2.3.4.5.6.7.9");
});

test("Expect correct update for version 9.9", () => {
  expect(nextVersion("9.9")).toBe("10.0");
});
