import java.util.Scanner;

public class Main {
    public static void main (String[] args) {

        int numbers;
        int bigNumber = 0;
        double media = 0;

        Scanner scan = new Scanner(System.in);

        for (int i = 0; i < 5; i++) {

            System.out.println("Digita o número " + (i + 1) + ": ");
            numbers = scan.nextInt();

            if (bigNumber < numbers) {
                bigNumber = numbers;
            }

            media = media + numbers;


        }

        media = media / 5;

        System.out.println("O maior número digitado foi: " + bigNumber);
        System.out.println("A média foi de: " + media);


    }


}
