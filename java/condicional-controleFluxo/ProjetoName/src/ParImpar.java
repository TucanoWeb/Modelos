import java.util.Scanner;

public class ParImpar {

    public static void main (String[] args) {

        int integerNumbers;
        int evenNumbers = 0;
        int oddNumbers = 0;


        Scanner scan = new Scanner(System.in);

        for (int i = 0; i < 5; i++) {

            System.out.println("Digita o número " + (i + 1) + " : ");
            integerNumbers = scan.nextInt();

            if (integerNumbers %2 == 0) {
                evenNumbers++;
            } else {
                oddNumbers++;
            }
        }

        System.out.println("A quantidade de números pares digitados foi: " + evenNumbers);
        System.out.println("A quantidade de números ímpares digitados foi: " + oddNumbers);


    }


}
