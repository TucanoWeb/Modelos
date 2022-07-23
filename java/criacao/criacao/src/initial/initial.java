package initial;

import java.util.Scanner;

public  class initial {

    public static void main (String[] args){

         int menu;

        Scanner scan = new Scanner(System.in);

        System.out.println("Selecione uma Opção: ");
        System.out.println("1 - Calculadora: ");
        System.out.println("2 - Hora do dia: ");
        System.out.println("3 - Empréstimo: ");
        System.out.println(("4 - Calcular Quadrilatero: "));
        menu = scan.nextInt();


        //Chama função

        if (menu == 1){
            new Calculadora();

        } else if (menu == 2) {
            new HourOfDay();

        } else if (menu == 3) {
        new HourOfDay();

    } else {
            new Quadrilatero();
        }
    }
}
