import javax.swing.JOptionPane;

public class AreaPerimetro {
  public static void main(String[] args) {
    String type = JOptionPane.showInputDialog("Insira a figura desejada!");

    switch (type) {
      case "quadrado":
        int lado = Integer.parseInt(JOptionPane.showInputDialog("Insira o valor do lado!"));

        System.out.println("O perímetro do " + type + " é = " + (4 * lado));
        System.out.println("A área do " + type + " é = " + (lado * lado));

        break;
      case "triangulo":
        int base = Integer.parseInt(JOptionPane.showInputDialog("Insira o valor da base!"));
        int lado1 = Integer.parseInt(JOptionPane.showInputDialog("Insira o valor do lado1!"));
        int lado2 = Integer.parseInt(JOptionPane.showInputDialog("Insira o valor do lado2!"));
        int altura = Integer.parseInt(JOptionPane.showInputDialog("Insira a altura!"));

        System.out.println("O perímetro do " + type + " é = " + (lado1 + lado2 + base));
        System.out.println("A área do " + type + " é = " + (base * altura / 2));

        break;
      case "circulo":
        float raio = Float.parseFloat(JOptionPane.showInputDialog("Insira o valor do raio!"));

        System.out.println("O perímetro do " + type + " é = " + Math.round(2 * Math.PI *raio));
        System.out.println("A área do " + type + " é = " + Math.round(Math.PI * raio * raio));

        break;
      default:
        JOptionPane.showMessageDialog(null, "Insira um tipo válido");
    }
  }
}
