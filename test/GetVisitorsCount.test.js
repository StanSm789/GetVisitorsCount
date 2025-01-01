const GetVisitorsCount = require('../src/functions/GetVisitorsCount');
const { updateAndReturnNewVisitorCount } = require('../src/util/util');

jest.mock('../src/util/util');

describe("GetVisitorsCount", () => {
    test("GetVisitorsCount returns the mocked visitor count", async () => {
        updateAndReturnNewVisitorCount.mockResolvedValueOnce(10);

        const response = await GetVisitorsCount();

        expect(updateAndReturnNewVisitorCount).toHaveBeenCalled();
        expect(response.body).toBe(10);
    });
});
