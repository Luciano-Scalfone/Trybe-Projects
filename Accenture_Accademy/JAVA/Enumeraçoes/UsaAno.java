import java.util.Calendar;

enum DiasSemana {
  DOMINGO, SEGUNDA_FEIRA, TERCA_FEIRA, QUARTA_FEIRA, QUINTA_FEIRA, SEXTA_FEIRA, SABADO
}

enum MesesAno {
  JANEIRO, FEVEREIRO, MARCO, ABRIL, MAIO, JUNHO, JULHO, AGOSTO, SETEMBRO, OUTUBRO, NOVEMBRO, DEZEMBRO
}

public class UsaAno {
  public static void main(String[] args) {
    Calendar c = Calendar.getInstance();
    
    for (DiasSemana dia : DiasSemana.values()) {
      System.out.println(dia);
    }
    
    System.out.println();
    
    for (MesesAno mesesAno : MesesAno.values()) {
      System.out.println(mesesAno);
    }
    
    System.out.println("\n");
    System.out.println(
      DiasSemana.SABADO + ", " + c.get(Calendar.DAY_OF_MONTH) + " de " + MesesAno.FEVEREIRO + " de " + c.get(Calendar.YEAR)
    );
  }
}
