import javax.swing.JOptionPane;

public class SomaLinhas {
  public static void main(String[] args) {
    int[][] matriz = new int[5][4];
  
    for (int i = 0; i < 5; i++) {
      for(int j = 0; j <= 1; j++) {
        matriz[i][j] = Integer.parseInt(JOptionPane.showInputDialog("Insira um valor na linha " + i + ", coluna " + j + ":"));
      }

      matriz[i][2] = matriz[i][0] + matriz[i][1];
      matriz[i][3] = matriz[i][0] + matriz[i][1] + matriz[i][2]; 
    }

    for (int i = 0; i < matriz.length; i++) {
      for (int j = 0; j < matriz.length - 1; j++) {
        System.out.println(matriz[i][j] + "\t");
      }
      System.out.println("\n");
    }
  }
}
