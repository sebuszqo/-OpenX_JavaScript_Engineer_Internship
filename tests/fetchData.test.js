const { fetchData } = require("../utils/fakeStoreUtils");

describe("fetchData", () => {
  it("returns data from a URL", async () => {
    const data = await fetchData("https://fakestoreapi.com/users");
    expect(data.length).toBeGreaterThan(0);
  });

  it("should throw an error when the network response is not ok", async () => {
    await expect(
      fetchData("https://fakestoreapi.com/nonexistent")
    ).rejects.toThrow(
      "Failed to fetch data from https://fakestoreapi.com/nonexistent"
    );
  });
});
