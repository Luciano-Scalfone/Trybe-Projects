import javax.swing.JOptionPane;

public class ExercicioVetorAlunos {
	public static void main(String[] args) {
		try {
			int qtd = Integer.parseInt(JOptionPane.showInputDialog("Digite a quantidade"));
			String[][] notas = new String[qtd][qtd];

			for(int i = 0 ; i < qtd ; i++) {
				notas[0][i] = JOptionPane.showInputDialog("Digite o nome do aluno " + i);
				notas[1][i] = JOptionPane.showInputDialog("Digite a nota do aluno " + i);
			}
			
			for(int i = 0 ; i < qtd ; i++) {
				System.out.print("Nome: " + notas[0][i] + "\tNota: " + notas[1][i]);
				if(Float.parseFloat(notas[1][i]) >= 7)		
					System.out.println(" - Aprovado ");
				else
					System.out.println(" - Reprovado ");
			}	
		}
		catch(NumberFormatException n) {
			JOptionPane.showMessageDialog(null, "Digite apenas números");
		}
		catch(NullPointerException p) {
			JOptionPane.showMessageDialog(null, "Você não digitou o que foi pedido");
		}
		catch(Exception e) {
			JOptionPane.showMessageDialog(null, "Ocorreu um erro desconhecido");
		}
	}	
}
