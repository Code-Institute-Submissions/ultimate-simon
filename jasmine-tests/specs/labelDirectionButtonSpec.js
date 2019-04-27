describe("labelDirectionButton", function() {
    describe("Direction Button Click", function() {
        it("should return Fwd", function() {
            expect(labelDirectionButton(true)).toBe("Fwd");
        });

        it("should return Rev", function() {
            expect(labelDirectionButton(false)).toBe("Rev");
        });
    });
});