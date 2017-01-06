import java.util.Scanner;


public class Employee {
	String name,designation;
	int age;
	double salary,pf,gratuity;
//	Employee(double salary,double pf,double gratuity)
//	{
//		this.salary=salary;
//		this.pf=pf;
//		this.gratuity=gratuity;
//	}
	double calculateSalary()
	{
		double totalsalary;
		totalsalary=salary-(pf+gratuity);
		
		return totalsalary;
		
	}
	public static void main(String[] args) 
	{
		 Employee Emp1=new Employee();	
		 Scanner sc=new Scanner(System.in);
		 System.out.println("Enter your name\n");
		 Emp1.name=sc.nextLine();
		 System.out.println("Enter your designation\n");
		 Emp1.designation=sc.nextLine();
		 System.out.println("Enter your age\n");
		 Emp1.age=sc.nextInt();
		 System.out.println("Enter your Salary\n");
		 Emp1.salary=sc.nextDouble();
		 System.out.println("Enter your PF\n");
		 Emp1.pf=sc.nextDouble();
		 System.out.println("Enter your gratuity\n");
		 Emp1.gratuity=sc.nextDouble();
		 double total=Emp1.calculateSalary();
		 System.out.println("hai\t"+Emp1.name+"\t you are \t"+Emp1.age+"\t years old. your designation is\t"+Emp1.designation+"\tand salary is\t"+total);
	}

}
