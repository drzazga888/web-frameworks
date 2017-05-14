package zti;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

public class Database {

	private Person person;
	private Connection conn = null;
	private PreparedStatement prestmt = null;
	private Statement stmt = null;
	private ResultSet rset = null;
	private List<Person> list = new ArrayList<Person>();

	public Database() {
		try {
			Context context = new InitialContext();
			DataSource ds1 = (DataSource) context.lookup("jdbc/Elephant");
			conn = ds1.getConnection();
		} catch (NamingException ex) {
			System.out.println(ex.getMessage());
		} catch (SQLException ex) {
			System.out.println(ex.getMessage());
		}
	}

	public void createPerson(Person person) {
		try {
			prestmt = conn.prepareStatement("INSERT INTO person (fname, lname, email, city, tel) VALUES (?,?,?,?, ?)");
			prestmt.setString(1, person.getFname());
			prestmt.setString(2, person.getLname());
			prestmt.setString(3, person.getEmail());
			prestmt.setString(4, person.getCity());
			prestmt.setString(5, person.getTel());
			prestmt.executeUpdate();
		} catch (SQLException ex) {
			System.out.println(ex.getMessage());
		} finally {
			try {
				if (prestmt != null) {
					prestmt.close();
				}
				if (conn != null) {
					conn.close();
				}
			} catch (SQLException ex) {
				System.out.println(ex.getMessage());
			}
		}
		return;
	}

	public void deletePerson(String id) {
		try {
			// System.out.println("Deleted record" + id);
			Integer ident = Integer.parseInt(id);
			prestmt = conn.prepareStatement("DELETE FROM person WHERE id = ?");
			prestmt.setInt(1, ident);
			prestmt.executeUpdate();
		} catch (SQLException ex) {
			System.out.println(ex.getMessage());
		} finally {
			try {
				if (prestmt != null) {
					prestmt.close();
				}
				if (conn != null) {
					conn.close();
				}
			} catch (SQLException ex) {
				System.out.println(ex.getMessage());
			}
		}
		return;
	}

	public Person readPerson(String id) {
		try {
			Integer ident = Integer.parseInt(id);
			prestmt = conn.prepareStatement("SELECT * FROM person WHERE id = ? ");
			prestmt.setInt(1, ident);
			ResultSet rset = prestmt.executeQuery();
			person = new Person();
			while (rset.next()) {
				person.setFname(rset.getString("fname"));
				person.setLname(rset.getString("lname"));
				person.setEmail(rset.getString("email"));
				person.setTel(rset.getString("tel"));
				person.setCity(rset.getString("city"));
				person.setId(rset.getInt("id"));
			}
		} catch (SQLException ex) {
			System.out.println(ex.getMessage());
		} finally {
			try {
				if (prestmt != null) {
					prestmt.close();
				}
				if (conn != null) {
					conn.close();
				}
			} catch (SQLException ex) {
				System.out.println(ex.getMessage());
			}
		}
		return person;
	}

	public void updatePerson(Person person) {
		try {
			// System.out.println("Deleted record" + person.getId());
			prestmt = conn.prepareStatement("UPDATE person SET fname=?,lname=?,email=?,city=?,tel=?  WHERE id = ?");
			prestmt.setString(1, person.getFname());
			prestmt.setString(2, person.getLname());
			prestmt.setString(3, person.getEmail());
			prestmt.setString(4, person.getCity());
			prestmt.setString(5, person.getTel());
			prestmt.setInt(6, person.getId());
			prestmt.executeUpdate();
		} catch (SQLException ex) {
			System.out.println(ex.getMessage());
		} finally {
			try {
				if (prestmt != null) {
					prestmt.close();
				}
				if (conn != null) {
					conn.close();
				}
			} catch (SQLException ex) {
				System.out.println(ex.getMessage());
			}
		}
		return;
	}

	public  List<Person> getPersonList(String orderby, String search) {
		try {
			if (orderby == null || !Arrays.asList(new String[]{"fname", "lname", "email", "tel", "city", "id"}).contains(orderby)) {
				orderby = "lname";
			}
			if (search == null) {
				search = "";
			}
			String sql = "SELECT * FROM public.person WHERE fname LIKE ? or lname LIKE ? or email LIKE ? or tel LIKE ? or city LIKE ? ORDER BY " + orderby;
			prestmt = conn.prepareStatement(sql);
			prestmt.setString(1, "%" + search + "%");
			prestmt.setString(2, "%" + search + "%");
			prestmt.setString(3, "%" + search + "%");
			prestmt.setString(4, "%" + search + "%");
			prestmt.setString(5, "%" + search + "%");
			rset = prestmt.executeQuery();
			while (rset.next()) {
				person = new Person();
				person.setFname(rset.getString("fname"));
				person.setLname(rset.getString("lname"));
				person.setEmail(rset.getString("email"));
				person.setTel(rset.getString("tel"));
				person.setCity(rset.getString("city"));
				person.setId(rset.getInt("id"));
				list.add(person);
			}
			rset.close();
		} catch (SQLException ex) {
			System.out.println(ex.getMessage());
		} finally {
			try {
				if (prestmt != null) {
					prestmt.close();
				}
				if (conn != null) {
					conn.close();
				}
			} catch (SQLException ex) {
				System.out.println(ex.getMessage());
			}
		}
		return list;
	}

}