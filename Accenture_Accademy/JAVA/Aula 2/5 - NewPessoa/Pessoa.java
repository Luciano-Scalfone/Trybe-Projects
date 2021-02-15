public class Pessoa {
  private String nome;
  private String RG;

  public Pessoa(String nome, String RG) {
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
    if (o instanceof Pessoa) {
      // Devemos fazer o cast de Object para Pessoa

      Pessoa p = (Pessoa) o;
     
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