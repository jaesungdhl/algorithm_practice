Fix the bug in Filtering method
The method is supposed to remove even numbers from the list and return a list that contains odd number.

However, there is a bug in the method that needs to be resolved.

Instructions
Output
Fix the bug in Filtering method
The method is supposed to remove even numbers from the list and return a list that contains odd number.

However, there is a bug in the method that needs to be resolved.

import java.util.List;
import java.util.*; 
public class Kata13December {
    public static List<Integer> filterOddNumber(List<Integer> listOfNumbers)
    {
      List<Integer> OddList = new ArrayList<>();
        for (int i = 0; i < listOfNumbers.size(); i++)
        {
            if (listOfNumbers.get(i) % 2 != 0)
            {
                OddList.add(listOfNumbers.get(i));
            }
        }
        return OddList;
    }
}

import java.util.*;
import java.lang.*;
import java.util.Collections.*;
import java.util.stream.Collectors;

public class Kata13December {
    public static List<Integer> filterOddNumber(List<Integer> listOfNumbers)
    {
        
        return listOfNumbers.stream().filter(l -> l%2 != 0).collect(Collectors.toList());
    }
}