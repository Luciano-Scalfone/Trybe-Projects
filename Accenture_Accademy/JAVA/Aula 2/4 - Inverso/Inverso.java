import javax.swing.JOptionPane;

public class Inverso {
  public static void main(String[] args) {
    String name = JOptionPane.showInputDialog("Insira uma palavra");
    String inverseName = "";

    for (int i = name.length() - 1; i >= 0; i--) {
      inverseName += name.charAt(i);
    }
    
    System.out.println(inverseName);
  }
}