describe("startGame", function() {
    describe("inititate", function() {
        it("should return array 5 elements in length for 5 rounds", function() {
            expect(startGame(1, 5, 4)).toBe(5);
        });

        it("should return array 10 elements in length for 10 rounds", function() {
            expect(startGame(1, 10, 4)).toBe(10);
        });

        it("should return array 15 elements in length for 15 rounds", function() {
            expect(startGame(1, 15, 4)).toBe(15);
        });
        it("should return array 20 elements in length for 20 rounds", function() {
            expect(startGame(1, 20, 4)).toBe(20);
        });

        it("should return array 25 elements in length for 25 rounds", function() {
            expect(startGame(1, 25, 4)).toBe(25);
        });

        it("should return array 30 elements in length for 30 rounds", function() {
            expect(startGame(1, 30, 4)).toBe(30);
        });

        it("should return array 35 elements in length for 35 rounds", function() {
            expect(startGame(1, 35, 4)).toBe(35);
        });

        it("should return array 40 elements in length for 40 rounds", function() {
            expect(startGame(1, 40, 4)).toBe(40);
        });

        it("should return array 45 elements in length for 45 rounds", function() {
            expect(startGame(1, 45, 4)).toBe(45);
        });
        it("should return array 50 elements in length for 50 rounds", function() {
            expect(startGame(1, 50, 4)).toBe(50);
        });
        it("should return array 55 elements in length for 55 rounds", function() {
            expect(startGame(1, 55, 4)).toBe(55);
        });
        it("should return array 60 elements in length for 60 rounds", function() {
            expect(startGame(1, 60, 4)).toBe(60);
        });

    });
});
