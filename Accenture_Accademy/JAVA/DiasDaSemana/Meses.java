public enum Meses {
    JANEIRO("Janeiro", 0),
    FEVEREIRO("Fevereiro", 1),
    MARCO("Março", 2),
    ABRIL("Abril", 3),
    MAIO("Maio", 4),
    JUNHO("Junho", 5),
    JULHO("Julho", 6),
    AGOSTO("Agosto", 7),
    SETEMBRO("Setembro", 8),
    OUTUBRO("Outubro", 9),
    NOVEMBRO("Novembro", 10),
    DEZEMBRO("Dezembro", 11);

    String mesTexto;
    int numero;

    Meses(String mesTexto, int numero) {
        this.mesTexto = mesTexto;
        this.numero = numero;
    } 

    public int getNumero() {
        return this.numero;
    }

    public String getMesTexto() {
        return this.mesTexto;
    }

}
