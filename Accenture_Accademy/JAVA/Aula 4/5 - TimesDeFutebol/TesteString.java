import java.util.*;

public class TesteString {
  public static void main(String[] args) {
    String str1 = "Flamengo";
    String str2 = "Internacional";
    String str3 = "Palmeiras";
    String str4 = "Vasco";
    String str5 = "Fluminense";
    String str6 = "Botafogo";
    String str7 = "São Paulo";
    String str8 = "Grêmio";
    String str9 = "Bragantino";
    String str10 = "Alético Mineiro";

    ArrayList times = new ArrayList();

    times.add(str1);
    times.add(str2);
    times.add(str3);
    times.add(str4);
    times.add(str5);
    times.add(str6);
    times.add(str7);
    times.add(str8);
    times.add(str9);
    times.add(str10);

    for (Object str : times) { 		      
      System.out.println(str); 		
    }

    System.out.println("");

    times.remove(6);

    for (Object str : times) { 		      
      System.out.println(str); 		
    }
  }
}

// public class TesteString {
// public static void main(String[] args) {
// String str1 = "São Paulo";
// String str2 = "Palmeiras";
// String str4 = "Santos";
// String str5 = "Vasco";
// String str6 = "Flamengo";
// String str7 = "Botafogo";
// String str8 = "Fluminense";
// String str9 = "Atletico/MG";
// String str3 = "Cruzeiro";
// String str10 = "Corinthians";

// ArrayList times = new ArrayList();

// times.add(str1);
// times.add(str2);
// times.add(str3);
// times.add(str4);
// times.add(str5);
// times.add(str6);
// times.add(str7);
// times.add(str8);
// times.add(str9);
// times.add(str10);

// times.remove(9);

// String time;

// Iterator iTer = times.iterator();

// while (iTer.hasNext()) {
// time = (String) iTer.next();

// System.out.println(time);
// }

// System.out.println("\nOrdenando.....:");
// System.out.println("São Paulo");
// Collections.sort(times);

// Iterator iTer2 = times.iterator();

// while (iTer2.hasNext()) {
// time = (String) iTer2.next();
// if (!time.equals("São Paulo"))
// System.out.println(time);
// }
// }
// }