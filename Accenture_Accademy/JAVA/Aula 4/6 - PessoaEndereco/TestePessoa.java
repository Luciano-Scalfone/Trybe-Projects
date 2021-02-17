import java.util.ArrayList;
import javax.swing.JOptionPane;

public class TestePessoa {

  public static void main(String[] args) {
    Pessoa p = new Pessoa("Joao");

    Endereco end;

    ArrayList enderecos = new ArrayList();

    String logr;
    String comp;
    int num;
    int resp;

    do {
      logr = JOptionPane.showInputDialog("Digite seu logradouro");
      num = Integer.parseInt(JOptionPane.showInputDialog("Digite o numero"));
      comp = JOptionPane.showInputDialog("Digite o complemento");

      end = new Endereco();

      end.setLogradouro(logr);
      end.setNumero(num);
      end.setComplemento(comp);
      enderecos.add(end);
      
      resp = JOptionPane.showConfirmDialog(null, "Deseja encerrar ?", "Encerrar", JOptionPane.YES_NO_OPTION,
          JOptionPane.QUESTION_MESSAGE);
    } while (resp == JOptionPane.NO_OPTION);

    p.setEnderecos(enderecos);
    p.imprimirEndereco1();
    p.imprimirEndereco2();
  }
}