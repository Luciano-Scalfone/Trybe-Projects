import javax.swing.JOptionPane;

public class PotenciasDeTres {
  public static void main(String[] args) {
    String expo = JOptionPane.showInputDialog("Insira um número!");
    int number = 15;

    if (expo.equals("")) System.err.println("Insira um número válido");

    int newExpo = Integer.parseInt(expo);

    System.out.println("O expoente de " + expo + " é:");

    for (int i = 0; i <= number; i++) {
      System.out.println(newExpo + " ^ " + i + " = " + Math.round(Math.pow(newExpo, i)));
    }
  }
}
