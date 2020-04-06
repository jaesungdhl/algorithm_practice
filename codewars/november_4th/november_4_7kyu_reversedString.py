Complete the solution so that it reverses the string value passed into it.

solution('world') # returns 'dlrow'

def solution(string):
    strArr = list(string)
    newStr = ""
    strArr.reverse()
    for char in strArr:
        newStr += char
    return newStr
    
    def solution(str):
  return str[::-1]