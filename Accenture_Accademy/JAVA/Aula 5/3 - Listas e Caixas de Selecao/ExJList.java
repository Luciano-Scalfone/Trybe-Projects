import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.event.*;

public class ExJList extends JFrame implements ListSelectionListener, ActionListener {
  JLabel l1;
  JTextField t1;
  JButton bquant, bindice, bclear;// Criando objetos Label, Texto e Botões
  JList lista; // Criando objeto Lista
  DefaultListModel listModel; // Criando objetos listModel a partir da classe DefaultListModel

  public static void main(String args[]) {
    new ExJList();
  }

  ExJList() {
    setSize(300, 250);
    setTitle("Uso do JList");
    t1 = new JTextField();
    t1.addActionListener(this);
    l1 = new JLabel("Sem selecao");
    l1.setForeground(Color.black);
    bquant = new JButton("Quantidade de itens");
    bquant.addActionListener(this);
    bindice = new JButton("Indice selecionado");
    bindice.addActionListener(this);
    bclear = new JButton("Remove item");
    bclear.addActionListener(this);

    listModel = new DefaultListModel();
    listModel.addElement("Banana");
    listModel.addElement("Pera");
    listModel.addElement("Maça");
    listModel.addElement("Uva");
    lista = new JList(listModel);
    lista.addListSelectionListener(this); // registra a lista
    JScrollPane Painel = new JScrollPane(lista); // Criando painel do tipo barra de rolagem
    setLayout(new GridLayout(6, 1));
    add(l1);
    add(t1);
    add(Painel);
    add(bquant);
    add(bindice);
    add(bclear);

    setLocationRelativeTo(null);
    setVisible(true);
    setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
  }

  public void actionPerformed(ActionEvent e) // Tratando o evento de seleção na lista
  {
    if (e.getSource() == t1) {
      listModel.addElement(t1.getText()); // adiciona itens a lista
      t1.setText("");
    } // Limpa a caixa de texto
    if (e.getSource() == bquant)
      t1.setText("Quantidade: " + listModel.getSize());// verifica a quantidade de itens da lista

    if (e.getSource() == bindice)
      t1.setText("Indice selecionado: " + lista.getSelectedIndex());// verifica o índice do item selecionado
    if (e.getSource() == bclear) {
      int resp = JOptionPane.showConfirmDialog(null, "Confirma a exclusão do item: " + lista.getSelectedValue());
      if (resp == 0) {
        int index = lista.getSelectedIndex();
        l1.setText("Removido : " + lista.getSelectedValue());
        listModel.remove(index);
      }
    }
  }

  public void valueChanged(ListSelectionEvent e) {
    l1.setText("Índice Selecionado : " + lista.getSelectedValue());
  }
}
