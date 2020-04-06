Write a function taking two parameters and returning an int array of all elements between the input parameters and including them.

def between(a,b):
    newArr = []
    for x in range(a,b + 1):
        newArr.append(x)
    return newArr

    def between(a,b):
    return range(a,b+1)