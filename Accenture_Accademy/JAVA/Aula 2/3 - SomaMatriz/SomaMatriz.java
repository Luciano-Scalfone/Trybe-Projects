import javax.swing.JOptionPane;

public class SomaMatriz {
  public static void main(String[] args) {
    int number = Integer.parseInt(JOptionPane.showInputDialog("Digite o valor"));

    int[][] vetorA = new int[number][number];
    int sumA = 0;
    int sumB = 0;
    int greater = 0;
    int minor = 0;
    
    for (int i = 0; i < number ; i++) {
      for (int j = 0; j < number ; j++) {   
        vetorA[i][j] = Integer.parseInt(JOptionPane.showInputDialog("Insira um valor"));
      }
    }
    for (int i = 0; i < number ; i++) {
      for (int j = 0; j < number ; j++) {   
        System.out.println("Linha: " + i + " coluna: " + j + " = " + vetorA[i][j]);
      }
    }
    for (int i = 0; i < number ; i++) {
      sumA += vetorA[i][i];
    }
    for (int i = 0; i < number ; i++) {
      sumB += vetorA[i][(number - 1) - i];
    }
    for (int i = 0; i < number ; i++) {
      if (vetorA[i][i] > greater) greater = vetorA[i][i];
    }
    for (int i = 0; i < number ; i++) {
      if (vetorA[i][(number - 1) - i] < minor) minor = vetorA[i][(number - 1) - i];
    }

    System.out.println("A soma do eixo principal é igual a: " + sumA);
    System.out.println("A soma do eixo secundário é igual a: " + sumB);
    System.out.println("O maior valor do eixo principal é igual a: " + greater);
    System.out.println("O menor do eixo secundário é igual a: " + minor);
  }
}