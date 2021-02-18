import java.awt.*;
import javax.swing.*;

public class UserScreen extends JFrame {
  private String title;
  private int height;
  private int width;
  private int red;
  private int green;
  private int blue;

  public UserScreen() {
    // this.title = JOptionPane.showInputDialog("Título da página");
    // this.height = Integer.parseInt(JOptionPane.showInputDialog("Insira uma altura"));
    // this.width = Integer.parseInt(JOptionPane.showInputDialog("Insira uma largura"));
    // this.red = Integer.parseInt(JOptionPane.showInputDialog("Insira a escala de vermelho"));
    // this.green = Integer.parseInt(JOptionPane.showInputDialog("Insira a escala de verde"));
    // this.blue = Integer.parseInt(JOptionPane.showInputDialog("Insira a escala de azul"));

    JTextField jt = new JTextField();
    jt.setText("Insira texto aqui");
    jt.setHorizontalAlignment(JTextField.CENTER);
    //insere o JTextField na Janela  
    
    JButton b1 = new JButton("Gravar");
	//50 posição x, 30 posição y, 100 largura, 30 altura
		b1.setBounds(180, 180, 100, 30);
		b1.setBackground(new Color(0,0,170));
		b1.setForeground(Color.YELLOW);
		b1.setFont(new Font("Helvetica", Font.BOLD, 12));
		b1.setToolTipText("Botao b1");
		b1.setHorizontalAlignment(SwingConstants.CENTER);
		b1.setVerticalAlignment(SwingConstants.CENTER);
		b1.setEnabled(true);
		b1.setMnemonic('G');

    JButton b2 = new JButton("Sair");
	//50 posição x, 30 posição y, 100 largura, 30 altura
		b1.setBounds(180, 180, 100, 30);
		b1.setBackground(new Color(0,0,170));
		b1.setForeground(Color.YELLOW);
		b1.setFont(new Font("Helvetica", Font.BOLD, 12));
		b1.setToolTipText("Botao b2");
		b1.setHorizontalAlignment(SwingConstants.CENTER);
		b1.setVerticalAlignment(SwingConstants.CENTER);
		b1.setEnabled(true);
		b1.setMnemonic('S');

    setTitle("this.title");
    setSize(400, 400);
    getContentPane().setLayout(new FlowLayout());
    getContentPane().setBackground(new Color(0, 0, 0));
    setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    setLocationRelativeTo(null);
    
    getContentPane().add(criarJLabel());
    getContentPane().add(jt);
    getContentPane().add(b1);
    getContentPane().add(b2);
  }

  public static void main (String[] args) {
    UserScreen userScreen = new UserScreen();

    userScreen.setVisible(true);
  }

  public JLabel criarJLabel(){
		JLabel jl = new JLabel("Nome\t");
		jl.setLocation(10, 10);
		jl.setSize(370, 50);
		//Torna opaco o fundo do rótulo
		jl.setOpaque(true);
		jl.setBackground(new Color(0, 0, 0));
		jl.setForeground(new Color(255,255,255));
		jl.setFont(new Font("Courier new", Font.BOLD, 12));
		jl.setToolTipText("JLabel Exemplo");
		jl.setHorizontalAlignment(SwingConstants.LEFT);
		jl.setVerticalAlignment(SwingConstants.TOP);
		
		return jl;
	}
}
