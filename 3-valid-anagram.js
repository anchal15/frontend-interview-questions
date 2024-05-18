// Ques 3 - Valid Anagram
// An Anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase, using all the original letters exactly once.

// Input: (s = "anagram"), (t = "nagaram"); ----->>>>>   Output: true;
// Input: (s = "rat"), (t = "car");         ----->>>>>   Output: false;

// 1st Approach
var isAnagram = function(s, t) {
    return s.length!==t.length? false: s.split("").sort().join("") === t.split("").sort().join("");
};

//2nd Approach (Better one)
var isAnagram = function(s, t) {
    if(s.length!==t.length) return false;
    let obj1={}
    let obj2={}
    for (let i=0; i<s.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }

    for(key in obj1) {
        if(obj1[key] !== obj2[key])
            return false
    }
    return true;
};
console.log(isAnagram("anagram", "nagarm"));
