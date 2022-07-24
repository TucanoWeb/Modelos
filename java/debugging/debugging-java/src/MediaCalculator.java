import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class MediaCalculator {

    double media;
    List<String> alunos = new ArrayList<>();
    List<Double> notas = new ArrayList<>();

    Scanner scan = new Scanner(System.in);

    MediaCalculator () {



        for (int i = 0; i < 3; i++) {

            System.out.println("Insira o nome do aluno " + (i +1));
           alunos.add(scan.next());
            System.out.println("Insira a nota do aluno " + (i +1));
            notas.add(scan.nextDouble());

        }

        System.out.println("A media da nota dos aluno " + alunos.get(0) + ", " + alunos.get(1) + " e " + alunos.get(2) + " foram de: " + ((notas.get(0) + notas.get(1) + notas.get(2)) /3 ));

    }

}
