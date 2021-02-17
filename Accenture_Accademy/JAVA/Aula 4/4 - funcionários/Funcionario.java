public class Funcionario {
  private String nome;
  private int idade;

  public Funcionario(String nome, int idade) {
    this.setNome(nome);
    this.setIdade(idade);
  }

  public int getIdade() {
    return idade;
  }

  public void setIdade(int idade) {
    this.idade = idade;
  }

  public String getNome() {
    return nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public String toString(){
    String str = "Funcionario: " + nome + "\nIdade: " + idade + "\n";
    return str;
  }
}
