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


describe ("whatcanIdrink", function() {
    beforeEach(function(){
        drink = new Drink();
    });
    describe ("No people under 0", function(){
        it("Should say sorry if age is less than 0", function(){
            if
            (expect(noLessThan0(-1, 0)).toBe(true)){
                return ("Sorry, no drinks under 0");
            }
            
        });
    });
    describe ("Under fourteen", function(){
        it ("Should say drink Toddy", function(){
            if(expect(lessThan14(13, 14)).toBe(true)){
                return ("Drink a Toddy");
            }
        });
    });
    describe ("Under eighteen", function(){
        it ("Should say drink a coke", function(){
            if(expect(lessThan18(17, 18)).toBe(true)){
                return ("Drink a coke");
            }
        });
    });
    describe ("Under 21", function(){
        it ("Should say drink a beer", function(){
            if(expect(lessThan21(20, 21)).toBe(true)){
                return ("Drink a beer");
            }
        });
    });
    describe ("Under 130", function(){
        it ("Should say Have a whiskey!", function(){
            if(expect(lessThan130(129, 130)).toBe(true)){
                return ("Have a whiskey");
            }
        });
    });
    describe ("Over 130", function(){
        it ("Should say Age is incorrect", function(){
            if(expect(moreThan130(131, 130)).toBe(true)){
                return ("Age is incorrect");
            }
        });
    });
});

describe ("FizzBuzz", function(){
    beforeEach(function(){
        fizzy = new Fizzy();
    });
    describe("Fizzbuzz", function(){
        it("Should say Fizzbuzz", function(){
            if(expect(FizzBuzz(15)).toBe(true)){
                return ("Fizzbuzz");
            }
        });
    });
    describe("Fizz", function(){
        it("Should say Fizz", function(){
            if(expect(FizzBuzz(15)).toBe(true)){
                return ("Fizz");
            }
        });
    });
    describe("Buzz", function(){
        it("Should say Buzz", function(){
            if(expect(Buzz(15)).toBe(true)){
                return ("Buzz");
            }
        });
    });
    describe("Not Divisable", function(){
        it("Should give back the number which is not divisable by 5", function(){
            if(expect(notdivide(21)).toBe(true)){
                return true;
            } 
                
        });
    });
});


describe ("fullName", function(){
    beforeEach = function(){
        Name = new Name;
    };
    describe ("wholeName", function(){
        it("Should give the whole name", function(){
            if
            (expect(WholeName("Will", "Baxter")).toBe(true)){
                return true;
            }
        });
    });
    describe ("wrongName", function(){
        it("Should give error alert", function(){
            if
            (expect(WholeName(1, "Baxter")).toBe(true)){
                return true;
            }
        });
    });
    describe ('toBeNull', function() {
    it('passes if subject is null', function() {
        expect(null).toBeNull();
    });
    });
    
});