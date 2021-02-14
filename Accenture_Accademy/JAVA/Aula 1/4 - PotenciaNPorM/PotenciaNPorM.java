import javax.swing.JOptionPane;

public class PotenciaNPorM {
  public static void main(String[] args) {
    int base = Integer.parseInt(JOptionPane.showInputDialog("Insira uma base!"));
    int expo = Integer.parseInt(JOptionPane.showInputDialog("Insira um expoente!")); 

    System.out.println("O exponte de " + base + " por " + expo + " é: " + Math.round(Math.pow(base, expo)));
  }
}
