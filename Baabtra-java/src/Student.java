import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;





public class Student
{
	String name,address;
	int sclass;
	int age;
	long mobile;
	public static void main(String[] args) 
	{ 
	 Student[] ss = new Student[10];
	 BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
	 int i=0;
	 String con;
	 while(true)
	 {
		 ss[i] = new Student();
		 System.out.println("Enter your name\n");
		 try 
		 {
			ss[i].name=br.readLine();
			System.out.println("Enter your class\n");
			ss[i].sclass=Integer.parseInt(br.readLine());
			 System.out.println("Enter your address\n");
			 ss[i].address=br.readLine();
			 System.out.println("Enter your age\n");
			 ss[i].age=Integer.parseInt(br.readLine());
			 System.out.println("Enter your Mobile");
			 ss[i].mobile=Long.parseLong(br.readLine());
			 System.out.println("Do you whant to enter more student details please press 'y' athorwise 'n'\n");
			 con=br.readLine();
			 if(con.equals("y")||con.equalsIgnoreCase("Y"))
			 {
				 i++;
			 }
			 else
				 break;
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	 }
	 System.out.println("Student Details\n");
	 System.out.println("Name\t\t Class \t\t Age \t\t Adresss \t\t Mobile\n");
	 for(int j=0;j<=i;j++)
	 {
		 
		 System.out.println(ss[j].name+"\t\t"+ss[j].sclass+"\t\t"+ss[j].age+"\t\t"+ss[j].address+"\t\t"+ss[j].mobile+"\n");
	 }
	}
}
