import java.awt.*;
import javax.swing.*;

class TesteJFrame extends JFrame {
  public TesteJFrame() {
    // Titulo da janela
    setTitle("Primeira Janela Swing");
    // tamanho da janela
    setSize(375, 100);
    // anula o layout padrao
    getContentPane().setLayout(null);
    // cor de fundo da janela no padrão RGB
    getContentPane().setBackground(new Color(255, 255, 255));
    // encerra o programa
    setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    // Ou setLocationRelativeTo(null) para centralizar o JFrame
    centralizar();
  }

  public static void main(String[] args) {
    TesteJFrame janela = new TesteJFrame();
    janela.setVisible(true);
  }

  public void centralizar() {
    // obtém a altura e largura da resolução vídeo
    Dimension screen = Toolkit.getDefaultToolkit().getScreenSize();
    // obtém a altura e largura da minha janela
    Dimension janela = getSize();

    if (janela.height > screen.height)
      setSize(janela.width, screen.height);
    if (janela.width > screen.width)
      setSize(screen.width, janela.height);

    setLocation((screen.width - janela.width) / 2, (screen.height - janela.height) / 2);
  }
}