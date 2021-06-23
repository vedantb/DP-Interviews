function TrieNode() {
  this.children = {};
  this.wordList = [];
}

let wordSquares = function (words) {
  let N = words[0].length;
  let trie = new TrieNode();
  let completeSolution = [];
  buildTrie(words, trie);
  for (let word of words) {
    let partialSolution = [word];
    backtrack(1, partialSolution, completeSolution, trie, words, N);
  }
  return completeSolution;
};

let backtrack = function (step, partialSolution, completeSolution, trie, words, N) {
  if (step === N) {
    completeSolution.push([...partialSolution]);
    return;
  }

  let prefix = "";
  for (let word of partialSolution) {
    prefix += word[step];
  }
  for (let wordIndex of getWordsWithPrefix(prefix, trie)) {
    partialSolution.push(words[wordIndex]);
    backtrack(step + 1, partialSolution, completeSolution, trie, words, N);
    partialSolution.pop();
  }
};

let getWordsWithPrefix = function (prefix, trie) {
  let node = trie;
  for (let letter of prefix.split("")) {
    if (letter in node.children) {
      node = node.children[letter];
    } else {
      return [];
    }
  }
  return node.wordList;
};

let buildTrie = function (words, trie) {
  for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
    let word = words[wordIndex];
    let node = trie;

    for (let letter of word) {
      if (letter in node.children) {
        node = node.children[letter];
      } else {
        let newNode = new TrieNode();
        node.children[letter] = newNode;
        node = newNode;
      }
      node.wordList.push(wordIndex);
    }
  }
};

console.log(wordSquares(["area", "lead", "wall", "lady", "ball"]));
