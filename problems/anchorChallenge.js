
/**
 * Calculates the largest set of unique characters that can be removed from the given string
 *  with the string's final length being no less than 50 chars.
 * 
 * A brute force solution to this problem is to attempt to remove every character, keeping track of 
 * how many characters are removed with each possibility. From there, we can continue to try every valid 
 * combination of removal, exploring all possible valid (chars >= n) removals. 
 * 
 * A simpler solution is to calculate the frequencies of each character's appearance, keeping a sorted list
 * which we can iterate through to see how many unique characters can be removed before the paragraph 
 * becomes too short. 
 * 
 * Creating a "list" of ordered elements and inserting each character into it would take time complexity O(log k) for each
 *  unique character in the str k. Although inserting and sorting upon each unique character is the same overall runtime of just
 *  sorting a completely unordered list of the chars, in practice sorting the unordered list will be faster.
 * 
 * Assuming a standard alphabet, the sorting will take O(k log k) and the initial precalculation O(n), so the runtime of the
 *  algorithm will be O(n + k log k) where n is the length of the passed in string and k is the number of unique characters within
 *  the string. K will be a constant number, so the runtime can be simplified to O(n).
 * 
 * The space complexity is also dependant on the number of unique characters and is therefore O(1).
 */
const mostCharsRemoved = (str, n) => {
    if (str.length == 0) return [];
    if (n >= str.length) return [];

    // Create and fill the char frequency map
    let charFrequency = {};
    for (let i = 0; i < str.length; i++) {
        if (!(str[i] in charFrequency)) charFrequency[str[i]] = 0;
        charFrequency[str[i]] += 1;
    }

    // Create a list of [char, frequency] pairs
    let charFrequencyList = [];
    let charFrequencyKeys = Object.keys(charFrequency);
    for (let i = 0; i < charFrequencyKeys.length; i++) {
        charFrequencyList.push([charFrequencyKeys[i], charFrequency[charFrequencyKeys[i]]]);
    }

    // Sort the list by character frequency in ascending order
    charFrequencyList.sort((a, b) => {
        return a[1] - b[1];
    });

    // Iterate through the sorted list until the maximum number of characters to remove is met
    let charsRemaining = str.length;
    let removedChars = new Set();
    let i = 0;

    while (charsRemaining - charFrequencyList[i][1] >= n) {
        charsRemaining -= charFrequencyList[i][1];
        removedChars.add(charFrequencyList[i][0]);
        i++;
    }

    return removedChars.size == 0 ? [] : Array.from(removedChars);
}

/**
 * A simple driver to test the mostCharsRemoved function. I tested using the assert
 * module, but removed it to avoid additional dependencies!
 */
const mostCharsRemoved_driver = () => {
    // Test of general case
    let string = `If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.`;
    let minChars = 50;
    mostCharsRemoved(string, minChars);

    // Test case where there is nothing to remove
    string = "Rocky mountains";
    minChars = 15;
    mostCharsRemoved(string, minChars); // Correctly returns []
}

mostCharsRemoved_driver();