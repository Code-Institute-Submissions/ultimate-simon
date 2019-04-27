describe("adjustDirection", function() {
    describe("Button Click", function() {
        it("should return true", function() {
            expect(adjustDirection(true)).toBe(false);
        });

        it("should return false", function() {
            expect(adjustDirection(false)).toBe(true);
        });
    });
});