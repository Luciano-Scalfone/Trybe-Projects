import javax.swing.JOptionPane;

public class VetorAB {
  public static void main(String[] args) {
    int[] vetorA = new int[10];
    int[] vetorB = new int[10];
    
    for (int i = 0; i <10 ; i++) {
      vetorA[i] = Integer.parseInt(JOptionPane.showInputDialog("Digite o valor"));
      vetorB[i] = vetorA[i]*vetorA[i];
    }
    for (int i = 0; i <10 ; i++) { 
      System.out.print(vetorA[i] +" ");
    }
    System.out.println("\n\n");
    for (int i = 0; i <10 ; i++) {
      System.out.print(vetorB[i] +" ");
    }
  }
}