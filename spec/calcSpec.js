describe("Calculator", function(){
    beforeEach(function() {
    calc = new Calculator();
    });
    describe("Addition function", function(){
        it("should add two numbers together and return the result", function(){
            calc.add(2);
            calc.add(2);
            expect(calc.value).toBe(4);
        });
        it("should not return 4 if the parameters given don't addup to 4", function(){
            calc.add(12);
            calc.add(7);
            expect(calc.value).toBe(19);
        });
        it("should have called the alert function if either function is undefined", function(){
            spyOn(window, "alert");
            calc.add();
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });


    describe("Subtract function", function(){
        it ("should subtract two numbers from each other and return the result", function(){
            
            expect(subtract(4, 2)).toBe(2);
        });
        it("should not return 2 if the the answer doesn't equate to 2", function(){
            
            expect(subtract(6, 3)).toBe(3);
        });
        it("should have called the alert function if either function is undefined", function(){
            spyOn(window, "alert");
            subtract();
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });

    describe("Multiply function", function(){
        it ("should multiply two numbers and return the result", function(){
            
            expect(multiply(4, 2)).toBe(8);
        });
        it("should not return 8 if the the answer doesn't equate to 8", function(){
            
            expect(multiply(6, 3)).toBe(18);
        });
        it("should have called the alert function if either function is undefined", function(){
            spyOn(window, "alert");
            multiply();
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });
   
    describe("Division function", function(){
        it ("should divide two numbers and return the result", function(){
            
            expect(divide(10, 5)).toBe(2);
        });
         it("should not return 2 if the the answer doesn't equate to 2", function(){
            
            expect(divide(15, 3)).toBe(5);
        });
         it("should have called the alert function if either function is undefined", function(){
            spyOn(window, "alert");
            divide();
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });
});