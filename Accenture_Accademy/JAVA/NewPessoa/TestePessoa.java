public class TestePessoa {
  public static void main(String args[]) {
    Pessoa1 p1 = new Pessoa1("Jessica", "752");
    Pessoa1 p2 = new Pessoa1("Jessica", "752");
    if (p1.equals(p2)) {
      System.out.println("p1 igual p2 com equals da classe Pessoa");
    } else {
      System.out.println("p1 != p2 com equals da classe Pessoa");
    }
  }
}
