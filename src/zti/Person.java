package zti;

//import javax.xml.bind.annotation.XmlRootElement;
//@XmlRootElement
public class Person {
	
  private String lname ;
  private String fname ;
  private String city ;
  private String email ;
  private String tel ;
  private Integer id;

  public Person() {}
  
  public Person(String lname, String fname, String city, String email, String tel, Integer id){
		this.lname = lname;
		this.fname = fname;
		this.city = city;
		this.email = email;
		this.tel = tel;		
		this.id = id;
  }
  
  public void setFname( String newValue ){ fname = newValue ; }
  public String getFname() { return fname ; }
  public void setLname ( String newValue ) { lname = newValue ; }
  public String getLname() { return lname ; }
  public void setCity ( String newValue ) { city = newValue ; }
  public String getCity() { return city ; } 
  public void setEmail ( String newValue ) { email = newValue ; }
  public String getEmail() { return email ; }    
  public void setTel ( String newValue ) { tel = newValue ; }
  public String getTel() { return tel ; }    
  public void setId ( Integer newValue ) { id = newValue ; }  
  public Integer getId() { return id ; }    

}