Inspired by the development team at Vooza, write the function howManyLightsabersDoYouOwn/how_many_light_sabers_do_you_own that

accepts the name of a programmer, and
returns the number of lightsabers owned by that person.
The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

howManyLightsabersDoYouOwn("anyone else") == 0
howManyLightsabersDoYouOwn("Zach") == 18

using System;

public class Kata
{
  public static int HowManyLightsabersDoYouOwn(string name)
  {
    return name == "Zach" ? 18 : 0;
  }
}