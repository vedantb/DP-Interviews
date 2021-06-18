# Best Team With No Conflict

You are the manager of a basketball team. For the upcoming tournament, you want to choose the team with the highest overall score. The score of the team is the sum of scores of all the players in the team.

However, the basketball team is not allowed to have conflicts. A conflict exists if a younger player has a strictly higher score than an older player. A conflict does not occur between players of the same age.

Given two lists, scores and ages, where each scores[i] and ages[i] represents the score and age of the ith player, respectively, return the highest overall score of all possible basketball teams.

Example 1:

```
Input: scores = [1,3,5,10,15], ages = [1,2,3,4,5]
Output: 34
Explanation: You can choose all the players.
```

Example 2:

```
Input: scores = [4,5,6,5], ages = [2,1,2,1]
Output: 16
Explanation: It is best to choose the last 3 players. Notice that you are allowed to choose multiple people of the same age.
```

## Solution

This problem involves finding the subset with maximum score that maintains the condition that no younger player can have strictly greater score than an older player.

So this is a perfect use case of Longest Increasing Subsequence.

Most problems where you are given an array (or list) of items and you'd have to find the largest subset of the items which maintains certain given condition could be solved using Longest Increasing Subsequence technique.

As in all LIS problems, the logic of how to sort the input must be determined carefully. for this problem for same age players, players should be scored in ascending order of score, so that when we are processing a player we have the leeway to include all the players with same age if they are eligible (i.e, if their score is higher or same as the score of the younger players already in the LIS.)

The player with the highest score in the same age group has the chance of including most number of younger players as well as all the eligible same age players. But if we keep same age player with lower score score after a same age player with higher score in the sorted array then even if the same age player with lower score can include all
the eligible same age players but will miss out on including many younger players with higher score.

**Code:**

[Code](../Best-Team-No-Conflict/best-team-no-conflict.js)
