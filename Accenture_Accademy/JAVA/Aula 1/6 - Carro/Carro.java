public class Carro extends Veiculo {

  private int portas;
  
  public void acelerar(int numero) {
    System.out.println("Acelerando a " + numero + "km/hr");

    aposAcelerar();
  }

  private void aposAcelerar() {
    System.out.println("executando após acelerar");
  }
}
