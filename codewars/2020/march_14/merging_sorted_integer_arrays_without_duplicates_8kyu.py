Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

def merge_arrays(first, second): 
    uniqueMergedArray = []
    mergedArray = first + second
    for item in mergedArray:
        if item not in uniqueMergedArray:
            uniqueMergedArray.append(item)
    uniqueMergedArray.sort()
    return uniqueMergedArray

    def merge_arrays(a, b): 
    return sorted(set(a + b))