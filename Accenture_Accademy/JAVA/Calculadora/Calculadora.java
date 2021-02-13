public class Calculadora {
  
  public int result;

  public void soma(String a, String b) {
    this.result = a + b;
    System.out.println(result);
  }

  public void soma(int a, int b) {
    this.result = a + b;
    System.out.println(result);
  }
}
