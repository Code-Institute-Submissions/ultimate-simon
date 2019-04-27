describe("adjustNoOfButtons", function() {
    describe("Button Click", function() {
        it("should return 6", function() {
            expect(adjustNoOfButtons(4)).toBe(6);
        });

        it("should return 4", function() {
            expect(adjustNoOfButtons(6)).toBe(4);
        });
    });
});