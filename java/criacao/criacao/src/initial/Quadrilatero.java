package initial;

import java.util.Scanner;
public class Quadrilatero {
    public Quadrilatero() {

        int menu;
        int lado1, lado2;
        int baseMaior, baseMenor, altura;

        Scanner scan = new Scanner(System.in);

        System.out.println("Selecione uma opção: ");
        System.out.println("1 - Calcular área de um quadrado: ");
        System.out.println("2 - Calcular área de um retângulo: ");
        System.out.println("3 - Calcular área de trapézio: ");
        menu = scan.nextInt();

        if (menu == 1 || menu == 2) {
            System.out.println("Digite o valor do lado1 : ");
            lado1 = scan.nextInt();
            System.out.println("Digite o valor do lado2: ");
            lado2 = scan.nextInt();

            int valueArea = areaQuadradoRetangulo(lado1, lado2);
            System.out.println("Valor da área: " + valueArea);

        } else {
            System.out.println("Digite o valor da Base maior: ");
            baseMaior = scan.nextInt();
            System.out.println("Digite o valor da Base menor: ");
            baseMenor = scan.nextInt();
            System.out.println("Digite o valor da Altura: ");
            altura = scan.nextInt();

            int valueAreaTrapezio = areatrapezio(baseMaior, baseMenor, altura);
            System.out.println("O valor da Área é: " + valueAreaTrapezio);
        }
    }


    public static int areaQuadradoRetangulo(int value1, int value2) {
        return value1 * value2;
    }

    public static int areatrapezio(int value1, int value2, int value3) {
        return ((value1 + value2)*value3) / 2;
    }
}
