public class Aluno 
{
	private float nota;
	private String nome;
	
	public Aluno(String nome, float nota) {
		this.nome = nome;
		this.nota = nota;
	}
	
	public void setNota(float nota) {
		this.nota = nota;
	}
	
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public float getNota() {
		return this.nota;
	}
	
	public String getNome() {
		return this.nome;
	}
	
	@Override
	public String toString() 
	{
		return this.nome + " - " + ((this.nota >= 7) ? "APROVADO" : "REPROVADO");
	}

	public Aluno() {
		super();
	}

	public Aluno(float nota, String nome) {
		super();
		this.nota = nota;
		this.nome = nome;
	}
}