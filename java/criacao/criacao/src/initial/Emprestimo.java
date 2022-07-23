package initial;

import java.util.Scanner;

public class Emprestimo {

    public Emprestimo() {

        double valueNecessary;
        int parcelas;
        float taxa = 0.349f;

        Scanner scan = new Scanner(System.in);

        System.out.println("Digite o valor necessário: ");
        valueNecessary = scan.nextDouble();

        System.out.println("Digite a quantidade de parcelas: ");
        parcelas = scan.nextInt();

        // Chama função
        double finalValue = calculatorValue(valueNecessary, parcelas, taxa);

        // Imprime Resultado da operação com valor final do empréstimo
        System.out.println(finalValue);
    }

    // Declara Função
    public static double calculatorValue(double valueNecessary, int parcelas, float taxa) {

        if (parcelas <= 6) {
            return valueNecessary * taxa + valueNecessary;

        } else {
            return (valueNecessary * taxa) * 1.37 + valueNecessary;
        }
    }
}
