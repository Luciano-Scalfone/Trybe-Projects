public enum DiasDaSemana {
    DOMINGO("Domingo", 1),
    SEGUNDA("Segunda", 2), 
    TERCA("Terça", 3),
    QUARTA("Quarta", 4),
    QUINTA("Quinta", 5),
    SEXTA("Sexta", 6),
    SABADO("Sábado", 7);

    String diaTexto;
    int numero;

    DiasDaSemana(String diaTexto, int numero) {
        this.diaTexto = diaTexto;
        this.numero = numero;
    }

    public String getDiaTexto() {
        return this.diaTexto;
    }

    public int getNumero() {
        return this.numero;
    }
}
