const { findFarthestUsers } = require("../utils/fakeStoreUtils");
const users = require("./data/usersTestData");

describe("findFarthestUsers throws an error because of data validation", () => {
  it("should throw an error when given empty array of users", () => {
    expect(() => findFarthestUsers([])).toThrow(
      "Invalid argument: less than two users provided"
    );
  });

  it("should throw an error when users argument is not an array", () => {
    expect(() => findFarthestUsers(null)).toThrow(
      "Invalid argument: argument is not an array"
    );
  });
});
describe("findFarthestUsers returns properly values", () => {
  it("should return message about farthest users when given array of users with different locations", () => {
    expect(findFarthestUsers(users)).toEqual(
      "Farthest users: John Doe and Donald Joe with distance of 17843.176 km"
    );
  });

  it("should return message about farthest users when given array of users with same locations", () => {
    const usersWithSameLocation = [
      {
        name: { firstname: "John", lastname: "Doe" },
        address: {
          geolocation: {
            lat: 51.509865,
            long: -0.118092,
          },
        },
      },
      {
        name: { firstname: "Jane", lastname: "Doe" },
        address: {
          geolocation: {
            lat: 51.509865,
            long: -0.118092,
          },
        },
      },
      {
        name: { firstname: "Bob", lastname: "Smith" },
        address: {
          geolocation: {
            lat: 51.509865,
            long: -0.118092,
          },
        },
      },
    ];

    expect(findFarthestUsers(usersWithSameLocation)).toEqual(
      "Farthest users: John Doe and Jane Doe with distance of 0 km"
    );
  });
});
