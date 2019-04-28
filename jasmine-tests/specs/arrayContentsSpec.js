describe("startGame", function() {
    describe("array Contents", function() {
        var array = [];
        array = startGame(1, 5, 4);
        var i = 1;
         do{
            it("value stored should be less than or equal to 3", function() {
                expect(array[i]).toBeLessThan(4);
            });

            it("value stored should be greater than or equal to zero", function() {
                expect(array[i]).toBeGreaterThan(-1);
            });
            i = i + 1;

        }while (i < 5)


    });
});
