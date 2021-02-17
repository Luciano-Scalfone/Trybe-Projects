import java.util.Calendar;

public class Enumeracoes {
    public static void main(String[] args) {

        // Dias cadastrados
        System.out.println("Dias: ");
        for (DiasDaSemana dia : DiasDaSemana.values()) {
            System.out.println("\t" + dia.getDiaTexto());
        }

        // Meses cadastrados
        System.out.println("Meses: ");
        for (Meses mes : Meses.values()) {
            System.out.println("\t" + mes.getMesTexto());
        }

        System.out.println(dataDeHoje());

    }

    public static String dataDeHoje() {
        Calendar hoje = Calendar.getInstance();
        String diaDaSemanaTexto = "";
        String mesDoAnoTexto = "";

        int diaDaSemana = hoje.get(Calendar.DAY_OF_WEEK);
        int mesDoAno = hoje.get(Calendar.MONTH);
        
        // Qual dia?
        for (DiasDaSemana dia : DiasDaSemana.values()) {
            if (dia.getNumero() == diaDaSemana) {
                diaDaSemanaTexto = dia.getDiaTexto();
                break;
            }
        }

        // Qual mês?
        for (Meses mes : Meses.values()) {
            if (mes.getNumero() == mesDoAno) {
                mesDoAnoTexto = mes.getMesTexto();
                break;
            }
        }

        return (
            "Hoje é " + diaDaSemanaTexto + ", " + 
            hoje.get(Calendar.DAY_OF_MONTH) + " de " + 
            mesDoAnoTexto + " do ano de " + hoje.get(Calendar.YEAR)
        );
    }

}
