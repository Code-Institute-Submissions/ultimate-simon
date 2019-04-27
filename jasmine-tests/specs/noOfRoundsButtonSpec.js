describe("adjustRounds", function() {
    describe("Button Click", function() {
        it("should return 10", function() {
            expect(adjustRounds(5)).toBe(10);
        });

        it("should return 15", function() {
            expect(adjustRounds(10)).toBe(15);
        });
        
        it("should return 20", function() {
            expect(adjustRounds(15)).toBe(20);
        });
        
        it("should return 25", function() {
            expect(adjustRounds(20)).toBe(25);
        });
        
        it("should return 30", function() {
            expect(adjustRounds(25)).toBe(30);
        });
        
        it("should return 35", function() {
            expect(adjustRounds(30)).toBe(35);
        });
        
        it("should return 40", function() {
            expect(adjustRounds(35)).toBe(40);
        });
        
        it("should return 45", function() {
            expect(adjustRounds(40)).toBe(45);
        });
        
        it("should return 50", function() {
            expect(adjustRounds(45)).toBe(50);
        });
        
        it("should return 45", function() {
            expect(adjustRounds(50)).toBe(55);
        });
        
        it("should return 60", function() {
            expect(adjustRounds(55)).toBe(60);
        });
    });
});