public class TesteBanco {
  public static void main (String[] args) { 
    AcessaBanco banco = new AcessaBanco();

    banco.setLogin("luciano");
    banco.setConectado(true);

    System.out.println(banco.getLogin());
    System.out.println(banco.getConectado());
  }
} 
