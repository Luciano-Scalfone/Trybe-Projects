public class TesteCirculo{
	public static void main (String args[]){
    Circulo circulo = new Circulo();

    System.out.println(circulo.getRaio());
    circulo.setRaio(10);
    System.out.println(circulo.getRaio());
	}
}