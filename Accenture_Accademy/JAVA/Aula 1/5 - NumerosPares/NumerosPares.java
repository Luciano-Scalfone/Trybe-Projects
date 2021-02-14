import javax.swing.JOptionPane;

public class NumerosPares {
  public static void main(String[] args) {
    int number = Integer.parseInt(JOptionPane.showInputDialog("Insira um número!"));

    System.out.println("Números pares filtrados\n");
    for (int counter = 1; counter <= number; counter++) {
      if (counter % 2 == 0 ) {
        System.out.println(counter);
      }
    }
  }
}
