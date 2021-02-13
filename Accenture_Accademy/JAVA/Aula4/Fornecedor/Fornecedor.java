public class Fornecedor {
  String nome;
  String fone;

  public void setNome(String nome) {
    this.nome = nome;
  }

  public void setFone(String fone) {
    this.fone = fone;
  }

  public String getNome() {
    return nome;
  }

  public String getFone() {
    return fone;
  }

  public void main(String[] args) {}

  public Fornecedor() {}

  public Fornecedor(String nome, String fone) {
    this.nome = nome;
    this.fone = fone;
  }
}
