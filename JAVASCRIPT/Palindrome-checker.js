function palindrome(str) {
    return (
      str.replace(/[\W_]/g, "").toLowerCase() ===
      str
        .replace(/[\W_]/g, "")
        .toLowerCase()
        .split("")
        .reverse()
        .join("")
    );
  }
  /*We start by using regular expressions to replace any white space or non-alphanumeric characters with nothing (or null), which essentially removes them from the string.

Next we chain .toLowerCase() to remove any capital letters because A is a different character than a. The problem did not ask us to worry about making sure the case of the characters was identical, just the spelling.

Our next step is to take our string and .split() it, .reverse() it, and finally .join() it back together.

Last step is to check that the string is the same forwards and backwards and return our result!*/
  