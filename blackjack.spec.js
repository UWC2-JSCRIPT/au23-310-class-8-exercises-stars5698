// Donna Quach, JavaScript 310B, Autumn 2023
// Class 8 Exercises 

// Create unit tests with Jasmine to test the following cases:
// 10, 9 passed into function should return false
// Ace, 6 passed into function should return true
// 10, 6, Ace passed into function should return false
// 2, 4, 2, 5 passed into function should return true

describe("Test Case 1 for the BlackJack Game", () => {
    it("should determine whether the dealer should draw or not (no Ace, hard)", () => {
        const dealerHand = [
            {displayVal: "Ten", val: 10, suit: "spades"},
            {displayVal: "Nine", val: 9, suit: "spades"}
        ]; 

        const result1 = dealerShouldDraw(dealerHand);

        expect(result1).toEqual(false);
    }); 
});

describe("Test Case 2 for the BlackJack Game", () => {
    it("should determine whether the dealer should draw or not (Ace, soft)", () => {
        const dealerHand = [
            {displayVal: "Ace", val: 11, suit: "spades"},
            {displayVal: "Six", val: 6, suit: "spades"}
        ]; 

        const result2 = dealerShouldDraw(dealerHand);

        expect(result2).toEqual(true);
    }); 

});

describe("Test Case 3 for the BlackJack Game", () => {
    it("should determine whether the dealer should draw or not (Ace, hard)", () => {
        const dealerHand = [
            {displayVal: "Ten", val: 10, suit: "spades"},
            {displayVal: "Six", val: 6, suit: "spades"},
            {displayVal: "Ace", val: 11, suit: "spades"}
        ];

        const result3 = dealerShouldDraw(dealerHand);

        expect(result3).toEqual(false);
    }); 
});

describe("Test Case 4 for the BlackJack Game", () => {
    it("should determine whether the dealer should draw or not (no Ace, hard, points less than 17)", () => {
        const dealerHand = [
            {displayVal: "Two", val: 2, suit: "spades"},
            {displayVal: "Four", val: 4, suit: "spades"},
            {displayVal: "Two", val: 2, suit: "clubs"},
            {displayVal: "Five", val: 5, suit: "clubs"},
        ]; 

        const result4 = dealerShouldDraw(dealerHand);

        expect(result4).toEqual(true);
    });
});