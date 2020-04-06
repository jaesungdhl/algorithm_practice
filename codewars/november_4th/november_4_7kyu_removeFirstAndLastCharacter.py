It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

def remove_char(s):
    strArr = list(s)
    strArr.pop(0)
    strArr.pop(len(strArr) - 1)
    return "".join(strArr)

    def remove_char(s):
    return s[1 : -1]