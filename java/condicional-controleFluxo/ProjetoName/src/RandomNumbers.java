import java.rmi.MarshalException;
import java.util.Random;

public class RandomNumbers {
    public static void main (String[] args) {

        Random random = new Random();
        int[] arrayNumbers = new int[20];

        for (int i = 0; i < 20; i++) {

            arrayNumbers[i] = random.nextInt(100);

        }

        for ( int arrayNumber : arrayNumbers ) {
            System.out.println(arrayNumber);

        }

    }


}
