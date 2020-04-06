This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

public class Multiplier
{
  public static int Multiply(int x) 
  {
    return x % 2 == 0 ? x * 8 : x * 9;
  }
}  

public class Multiplier
{
  public static int Multiply(int n) => n * (n % 2 == 0 ? 8 : 9);
}  