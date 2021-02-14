public class UsaCarro {
  public static void main(String[] args) {
    Carro fiesta = new Carro();
    fiesta.setCor("prata");

    System.out.println(fiesta.getCor());
    fiesta.acelerar(80);

    Motocicleta factor = new Motocicleta();
    fiesta.setCor("azul");

    System.out.println(fiesta.getCor());
  }
}
