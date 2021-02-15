public class Calculadora {
  public void soma(int number1, int number2) {
    System.out.println(number1 + number2);
  }

  public void soma(float number1, float number2) {
    System.out.println(number1 + number2);
  }

  public void soma(String number1, String number2) {
    int newNumber1 = Integer.parseInt(number1);
    int newNumber2 = Integer.parseInt(number2);

    System.out.println(newNumber1 + newNumber2);
  }

  public void subtracao(int number1, int number2) {
    System.out.println(number1 - number2);
  }

  public void subtracao(float number1, float number2) {
    System.out.println(number1 - number2);
  }

  public void subtracao(String number1, String number2) {
    int newNumber1 = Integer.parseInt(number1);
    int newNumber2 = Integer.parseInt(number2);

    System.out.println(newNumber1 - newNumber2);
  }
}