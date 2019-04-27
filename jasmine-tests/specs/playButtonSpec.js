describe("playButton", function() {
    describe("Button Played", function() {
        it("should return red", function() {
            expect(playButton(0)).toBe("red");
        });

        it("should return green", function() {
            expect(playButton(1)).toBe("green");
        });

        it("should return yellow", function() {
            expect(playButton(2)).toBe("yellow");
        });

        it("should return blue", function() {
            expect(playButton(3)).toBe("blue");
        });

        it("should return purple", function() {
            expect(playButton(4)).toBe("purple");
        });

        it("should return brown", function() {
            expect(playButton(5)).toBe("brown");
        });

    });
});
