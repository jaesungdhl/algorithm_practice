Fix the bug in Filtering method
The method is supposed to remove even numbers from the list and return a list that contains odd number.

However, there is a bug in the method that needs to be resolved.

Instructions
Output
Fix the bug in Filtering method
The method is supposed to remove even numbers from the list and return a list that contains odd number.

However, there is a bug in the method that needs to be resolved.

using System;
using System.Collections.Generic;
using System.Linq;
public class Kata
{
  public static List<int> FilterOddNumber(List<int> listOfNumbers)
  {
    List<int> OddList = new List<int>();
    for (int i = 0; i < listOfNumbers.Count; i++)
    {
      if (listOfNumbers[i] % 2 != 0)
      {
        OddList.Add(listOfNumbers[i]);
      }
    }
    return OddList;
  }
}

using System;
using System.Collections.Generic;
using System.Linq;

public class Kata
{
  public static List<int> FilterOddNumber(List<int> numbers)
  {
    return numbers.Where(n => n % 2 == 1).ToList();
  }
}