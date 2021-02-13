import javax.swing.JOptionPane;

public class AreaPerimetroSwitch {
  public static void main(String[] args) {
    byte escolha = Byte.parseByte(JOptionPane.showInputDialog("Digite:\n1-Quadrado \n2-Triangulo \n3-Círculo"));

    switch (escolha) {
      case 1:
        float lado = Float.parseFloat(JOptionPane.showInputDialog("Digite o valor do lado"));

        JOptionPane.showMessageDialog(null, "Area do Quadrado = " + lado * lado);
        JOptionPane.showMessageDialog(null, "Perímetro do Quadrado = " + 4 * lado);
        break;
      case 2:
        float ladoBase = Float.parseFloat(JOptionPane.showInputDialog("Digite a Base"));
        float altura = Float.parseFloat(JOptionPane.showInputDialog("Digite a Altura"));
        float lado2 = Float.parseFloat(JOptionPane.showInputDialog("Digite o Segundo Lado"));
        float lado3 = Float.parseFloat(JOptionPane.showInputDialog("Digite o Terceiro Lado"));

        JOptionPane.showMessageDialog(null, "Area do Triangulo = " + ladoBase * altura / 2);
        JOptionPane.showMessageDialog(null, "Perímetro do Triangulo = " + (ladoBase + lado2 + lado3));
        break;
      case 3:
        float raio = Float.parseFloat(JOptionPane.showInputDialog("Digite o Raio do circulo"));
        JOptionPane.showMessageDialog(null, "Area do Círculo = " + 3.14 * raio * raio);
        JOptionPane.showMessageDialog(null, "Perímetro do Círculo = " + (2 * 3.14 * raio));
        break;
      default:
        JOptionPane.showMessageDialog(null, "Valor INCORRETO!!!\nDigite apenas 1 ou 2 ou 3.", "Erro de Entrada", 0);
    }
  }
}