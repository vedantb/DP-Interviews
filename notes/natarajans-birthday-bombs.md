# Natarajan's Birthday Bombs

It’s Natarajan's birthday today and he has N friends.

Friends are numbered \[0, 1, 2, ...., N-1\] and ith friend have a positive strength B\[i\].

Today being his birthday, his friends have planned to give him birthday bombs \(kicks\).

Tushar's friends know Tushar's pain bearing limit and would hit accordingly.

If Tushar’s resistance is denoted by A \(&gt;=0\) then find the lexicographically smallest order of friends to kick Tushar so that the cumulative kick strength \(sum of the strengths of friends who kicks\) doesn’t exceed his resistance capacity and total no. of kicks hit are maximum.

Also note that each friend can kick unlimited number of times \(If a friend hits x times, his strength will be counted x times\)

Return the lexicographically smallest array of maximum length where the ith index represents the index of the friend who will hit.

Example:

```text
 A = 12
 B = [3, 4]
 Output:  [0, 0, 0, 0]
 Because person 0 (with strength 3) kicks 4 times to total 12
```

Example 2:

```text
 A = 11
 B = [6, 8, 5, 4, 7]
 Output:  [0, 2]
 Person 0 (with strength 6) and Person 2 (with strengeth 5) kick to total 11
```

## Solution

```text
for each person's kick strendeth 'l'
  add the index to combination array
  create a new set which includes one kick of strength  'l' if it does not exceed 'A', and
     recursively call to process all people

  pop index from the combination array
  create a new set without length 'l', and recursively call to process the remaining people
return the number of kicks and their indexes from the above two sets with a higher number of kicks
```

This solution is similar to the combination sum problem on leetcode.

[Recursive Code](https://github.com/vedantb/DP-Interviews/tree/746642c4896349114c442abf9ed439d6490a8193/Natarajan-Birthday-Bombs/natarajan-birthday-bombs-recursive.js)

## Space Optimized Dynamic Programming

Like other unbounded knapsack problems. We have a DP array of total + 1. In addition to the DP array, we also have an index array which will store indexes of kicks. e.g. indexes\[i\] denotes that the ith person kicked last when the total was i. Using this array, after we're done with the DP solution, we can look back and index\[totalPainTolerance\] will give you the last person \(index\) to kick. We can substract the value and look at indexes\[totalPainTolerance - kickStrengths\[i\]\]

[DP Solution](https://github.com/vedantb/DP-Interviews/tree/746642c4896349114c442abf9ed439d6490a8193/Natarajan-Birthday-Bombs/natarajan-birthday-bombs-dp.js)

## Non-DP Solution

1. Find the minimum number in the kickStrengths array.
2. We know that if `totalTolerance / minKickStrength` is 0, that is the max amount of kicks we can hit.
3. We calculate the available buffer we have after we can hit with the minKickStrength max times. This can easily be calculated by `totalTolerance % minKickStrength`. e.g. if the total tolerance is 14 and the the kicks array is \[3,4\]. We know that we can hit with strength 3 at least 4 times to get 12. And we have a buffer of 2.
4. We loop once through the strengths array. This works because we need to just return the max kicks in sorted order. If the current number is the minNumber, you just add the index to the results. If the current number is &gt; minNumber, you calculate the difference \(currentNumber - minNumber\) and substract that value from the available buffer.

[CODE](https://github.com/vedantb/DP-Interviews/tree/746642c4896349114c442abf9ed439d6490a8193/Natarajan-Birthday-Bombs/natarajan-birthday-bombs-interesting.js)

