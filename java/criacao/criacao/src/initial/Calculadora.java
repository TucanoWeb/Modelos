package initial;

import java.util.Scanner;
public class Calculadora {
    public Calculadora() {

        int a,b;

        Scanner scan = new Scanner(System.in);

        System.out.println("Digite o primeiro valor: ");
        a = scan.nextInt();
        System.out.println("Digite o segundo valor: ");
        b = scan.nextInt();

        //Chama funções

        int soma = soma(a,b);
        int subtracao = subtracao(a,b);
        int multiplica = multiplica(a,b);
        double divide = divide(a,b);


        // Imprime

        System.out.println("Soma: " + soma);
        System.out.println("Subtração: " + subtracao);
        System.out.println("Multiplicação:" + multiplica);
        System.out.println("Divisão: " + divide);

    }
    // Declara funções

    public static int soma(int a, int b) {
        return a + b;

    }

    public static  int subtracao (int a, int b){
        return a -b;
    }

    public static int multiplica (int a, int b){
        return a * b;
    }

    public static double divide (double a, double b) {
        return a / b;

    }
}
