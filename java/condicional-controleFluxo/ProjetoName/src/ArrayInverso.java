import java.util.Scanner;

public class ArrayInverso {
    public static void main (String[] args) {

        Scanner scan = new Scanner(System.in);

        int[] array = {0,1,2,3,4,5};
        int count = 5;

        for (int i = 0; i < 6; i++) {
            System.out.println("Digite o número " + (i + 1));

            array[count]= scan.nextInt();
            count--;

        }

        // for each

        for ( int arrays : array ) {
            System.out.println(arrays);
        }


    }
}
