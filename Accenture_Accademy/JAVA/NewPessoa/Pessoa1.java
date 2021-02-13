public class Pessoa1 {
  private String nome;
  private String RG;

  public Pessoa1(String nome, String RG) {
    this.setNome(nome);
    this.setRG(RG);
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public void setRG(String RG) {
    this.RG = RG;
  }

  public String getNome() {
    return nome;
  }

  public String getRG() {
    return RG;
  }

  public boolean equals(Object o) {
    // Devemos verificar se o objeto "o" eh uma instancia da classe Pessoa
    if (o instanceof Pessoa1) {
      // Devemos fazer o cast de Object para Pessoa

      Pessoa1 p = (Pessoa1) o;
     
      if (this.getNome().equals(p.getNome()) && this.getRG().equals(p.getRG())) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}