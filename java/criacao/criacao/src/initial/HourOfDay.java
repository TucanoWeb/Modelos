package initial;

import java.util.Scanner;

public class HourOfDay {

    public HourOfDay () {

        int hour;
        String msg = null;

        Scanner scan = new Scanner(System.in);

        System.out.println("Digite a hora do dia: ");
        hour = scan.nextInt();

        // Chama função

        String msgFinal = String.valueOf(verifyHour(hour, msg));

        // Imprime mensagem final

        System.out.println(msgFinal);
    }

    //Declara função verifica hora

    public static String verifyHour(int hour, String msg) {

        if (hour >= 1 && hour < 12){

            return msg = "Bom dia!";

        } else if (hour >= 12 && hour < 18) {
            return msg = "Boa Tarde!";

        } else {

            return msg = "Boa noite!";

        }
    }
}
