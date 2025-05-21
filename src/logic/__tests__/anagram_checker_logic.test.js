import {anagramChecker} from '../anagram_checker_logic'

describe("anagram checker logic", () => {

    it("should return true if there anagrams", () => {
    const expectedResult = true
    const answer = anagramChecker("stop", "pots") 
    expect(answer).toBe(expectedResult)
    })
    it("should return false if there not anagrams", () => {
        const expectedResult = false
        const answer = anagramChecker("five", "lies") 
        expect(answer).toBe(expectedResult)
    })
    it("must have same number of letters not just same ones", () => {
        const expectedResult = false
        const answer = anagramChecker("stoop", "stopss") 
        expect(answer).toBe(expectedResult)
    })
    it("should ignore spaces", () => {
        const expectedResult = true
        const answer = anagramChecker("a big cake", "bigcake a") 
        expect(answer).toBe(expectedResult)
    }) 
    it("should ignore capital letters", () => {
        const expectedResult = true
        const answer = anagramChecker("Stop", "pots") 
        expect(answer).toBe(expectedResult)
    })
    it("not effected by duplicate s", () => {
        const expectedResult = false
        const answer = anagramChecker("stop", "potss") 
        expect(answer).toBe(expectedResult)
    })
    it("return false for different length", () => {
        const expectedResult = false
        const answer = anagramChecker("asdf", "asdfs") 
        expect(answer).toBe(expectedResult)
    })
})