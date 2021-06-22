# Backtracking

Backtracking is based on exhaustive search technique. It is a DFS (Depth First Search) approach. We do DFS on **Backtracking Tree**.

We basically systematically create all the possible configurations of a search space and return the one(s) that is/are the required result. We will have to keep in mind that both the below scenarios must be avoided:

1. **Repititions:** Generating a configuration that has already been produced
2. **Missing a configuratin**

If scenario 1 occurs then we would know that we need to be more systematic while doing an exhaustive search, and if scenario 2 occurs then we would know that we are failing to do an exhaustive search.

Now an astute developer might be thinking that an exhaustive search would have an enormous time complexity. Yes, that is true. That is why we have the pruning techniques. We should immediately stop a line of search as soon as we see that a partial solution cannot be extended to a full solution. We then backtrack and work on next line of search.

A scenario where pruning is very useful: Say, We are trying to find the least cost path from vertex s to t in a graph. Now say till now whatever paths we have discovered, we have got 40 as the least cost value of a path. We while doing an exhaustive search if we see that the cost of our partial solution is already greater than or equal to 40 then we should stop working on that partial solution immediately and so ahead with our next search. This would save enormous time and space. Thus search pruning can help us to optimize our Backtrack solution. Developers should take identifying the criteria on which search should be pruned very seriously.

## Main Philosophy of Backtracking

If we think of the search space as a tree then when we are on one node all the possible values for this node can be thought of as its child nodes. We need to process all of its child nodes (if there is no early termination). Here we can have two scenarios:

- We are done processing the child node which has yield a complete solution, like in the case of generating combinations and permutations.

- We happen to see that the value of this child node would not extend to a valid complete solution in which case we would do a pruning to avoid any unnecessary processing, like in the case of traveling salesperson or minimum spanning tree.

n both the above cases we would go back (i.e, backtrack) to the parent node and consider the values of the other child nodes. It is for this particular reason it is called Backtrack and also it is for this mechanism that Backtrack can perform exhaustive search.

## Implementation

Now lets talk about a very simple implementation strategy that would help design and code a backtrack solution for most of the combinatorial algorithm problems very easily.

So first off, we need to know that we always work on top of a partial solution in backtrack and trying to extend the partial solution to a full solution, except at the very beginning when we are just starting our search and consequently there is no partial solution.

**STEP 1:** Check if the partial solution that we have till now is actually a full solution. So then process the solution which may consist of printing the values or returning a count value in most cases.
If we haven’t gotten a full solution yet then go to STEP 2.

**STEP 2:** Construct a set of candidates which are suitable and qualify to be the next element in the solution set for extending the partial solution.

**STEP 3:** In order to have an exhaustive search we need to iterate over all the possible candidates and in each iteration we would place the candidate being fetched by the iterator as the next element in the solution set (extending the partial solution) and after each place placement we should go to STEP 1 to check if we have gotten a full solution (basically, recurse).

**Pseudocode:**

```js
let backtrack = function (partialSolution, index) {
  // first check if we already have a complete solution
  if (isACompleteSolution(partialSolution, index - 1)) {
    processSolution(partialSolution, index - 1);
    return;
  }

  let suitableCandidates = constructCandidates(partialSolution, index);

  for (let candidate of suitableCandidates) {
    makeMove(partialSolution, index);
    backTrack(partialSolution, index + 1);
    undoMakeMove(partialSolution, index);
    if (finished) return; // early termination
  }
};
```

**In backtrack(…) method the index parameter indicates index of the element in the partialSolution array that we are going to process next. Just before processing index-th element of the partialSolution array we first check if we have already gotten a full solution till the (index – 1)-th element of the partialSolution array, which is partialSolution[0…(index – 1)]. Keep in mind that here partialSolution is a zero based array.**

So, after all these discussions we can understand that while solving a backtrack problem we would need to implement the following methods in our solution:

1. **isACompleteSolution** method checks if the elements from index 0 to `(index – 1)` of partialSolution array forms a complete solution, if so then process `partialSolution[0…(index – 1)]` and return.

2. **processSolution** processes the solution if we have gotten one.

3. **`constructCandidates(partialSolution, index)`** constructs a list of all possible candidates for `partialSolution[index]`, i.e, the element at the index ‘index’ of partialSolution array.

4. **`makeMove(partialSolution, index)`** puts a candidate element at `partialSolution[index]`.

5. **`backtrack(…)`** method recursively calls itself. It helps to explore all valid childNodes in backtracking tree to see if the current partialSolution could be extended to a completeSolution.

6. **`undoMakeMove(partialSolution, index)`** resets the value of `partialSolution[index]`.

7. **Early Termination:** See how we terminate early when needed. This does not apply to all problems.

We won’t need the ‘finished’ flag if we want to produce all the possible solutions (like in combinations and permutations problems where we need to output all the combinations and permutations respectively). But if all we care about is to display only one solution (the one that we get first) just like in Sudoku, then we will need a ‘finished’ flag for early termination to signal that we have got a result to display so no need to proceed any further.

We can use the whole above described technique like a template to solve different combinatorial problems like permutation, combination, sudoku game, all spanning trees, traveling salesperson problem, all paths from vertex s to vertex t in a graph and many more using Backtracking.
