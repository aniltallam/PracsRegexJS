# PracsRegexJS
To practice regular expressions in javascript


NOTES:
1. For split there is no need to use g (global search) in regeX. even without g it searches globally. this is not the case with replace where we have to use g explicity for global search.
2. In split, chars '(' ')' in combination van be used to keep the delimiter (or sub string of it) in result array of tokens.
3. In regex there are some special chars, to search these chars in a given string we have to escape them using '\'. e.g '\*'. Special chars are * [ ] ( ) +
