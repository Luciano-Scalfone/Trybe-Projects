import javax.swing.JOptionPane;
public class ExercicioVetorAlunos 
{
	public static void main(String a[])
	{
		try
		{
			int qtd = Integer.parseInt(JOptionPane.showInputDialog("Digite a quantidade"));
			float notas[] = new float[qtd];
			String nome[] = new String[qtd];

			for(int i=0 ; i<qtd ; i++)
			{
				nome[i] = JOptionPane.showInputDialog("Digite o nome");
				notas[i] = Float.parseFloat(JOptionPane.showInputDialog("Digite a nota"));		
			}
			for(int i=0 ; i<qtd ; i++)
			{
				System.out.print("Nome: " + nome[i] + "\tNota: " + notas[i]);
				if(notas[i]>7)		
					System.out.println(" - Aprovado ");
				else
					System.out.println(" - Reprovado ");
			}	
		}
		catch(NumberFormatException n)
		{
			JOptionPane.showMessageDialog(null, "Digite apenas n�meros");
		}
		catch(NullPointerException p)
		{
			JOptionPane.showMessageDialog(null, "Voc� n�o digitou o que foi pedido");
		}
		catch(Exception e)
		{
			JOptionPane.showMessageDialog(null, "Ocorreu um erro desconhecido");
		}
	}	
}
