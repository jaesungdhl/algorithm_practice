Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

using System;

public static class Kata
{
  public static int SquareSum(int[] n)
  { 
    int sum = 0;
    for(int i = 0; i < n.Length; i++)
    {
      sum += (int)Math.Pow((double)n[i], 2);
    }
    return sum;
  }
}

using System.Linq;
public static class Kata
{
  public static int SquareSum(int[] n) => n.Sum(i => i * i);
}