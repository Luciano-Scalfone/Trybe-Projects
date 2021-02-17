import java.util.*;

public class Pessoa {
  private String nome;
  private ArrayList enderecos;

  public Pessoa(String nome) {
    this.nome = nome;
  }

  public ArrayList getEnderecos() {
    return enderecos;
  }

  public void setEnderecos(ArrayList enderecos) {
    this.enderecos = enderecos;
  }

  public String getNome() {
    return this.nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public void imprimirEndereco1() {
    Endereco end;
    for (int nCont = 0; nCont < enderecos.size(); nCont++) {
      end = (Endereco) enderecos.get(nCont);
      System.out.println(end);
    }
  }

  public void imprimirEndereco2() {
    Endereco end;
    Iterator iTer = enderecos.iterator();

    while (iTer.hasNext()) {
      end = (Endereco) iTer.next();
      System.out.println(end);
    }
  }
}
