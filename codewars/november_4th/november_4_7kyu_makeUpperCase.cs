Write function makeUpperCase.

  public class Kata
  {
        public static string MakeUpperCase(string str)
        {
             return str.ToUpper();
        }
  }

 public class Kata
  {
        public static string MakeUpperCase(string str)
        {
             return (str ?? string.Empty).ToUpper();
        }

  }