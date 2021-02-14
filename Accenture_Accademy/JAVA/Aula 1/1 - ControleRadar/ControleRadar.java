import javax.swing.JOptionPane;

public class ControleRadar {
  public static void main(String[] args) {
    byte velocidade = Byte.parseByte(JOptionPane.showInputDialog("Digite a velocidade"));

    if (velocidade <= 80) {
      JOptionPane.showMessageDialog(null, "Agora voce esta a " + velocidade + "Km por hora");
    } else {
      velocidade = 80;
      JOptionPane.showMessageDialog(null, "Sua velocidade foi reduzida.\nAgora voce esta a 80Km por hora");
    }
  }
}
