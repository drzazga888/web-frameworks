package zti;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

@Path("/person")
public class SimpleResource {
	
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public Person[] get(@QueryParam("orderby") String orderby, @QueryParam("search") String search) {
        System.out.println("GET");
        Database data = new Database();
        return data.getPersonList(orderby, search).toArray(new Person[0]);
    }

    @GET
    @Path("{id}")
    @Produces({MediaType.APPLICATION_JSON})
    public Person get(@PathParam("id") String id) {
        System.out.println("GET");
        Database data = new Database();
        return data.readPerson(id);
    }

    @POST
    @Consumes({MediaType.APPLICATION_JSON})
    @Produces({MediaType.TEXT_PLAIN})
    public String post(Person person) {
        System.out.println("POST");
        Database data = new Database();
        data.createPerson(person);
        return "add record" ;
    }

    @PUT
    @Consumes({MediaType.APPLICATION_JSON})
    @Produces({MediaType.TEXT_PLAIN})
    public String put(Person person) {
        System.out.println("PUT");
        Database data = new Database();
        data.updatePerson(person);
        return "update record" ;
    }

    @DELETE
    @Path("{id}")
    @Produces({MediaType.TEXT_PLAIN})
    public String delete(@PathParam("id") String id) {
        System.out.println("DELETE");
        Database data = new Database();
        data.deletePerson(id);
        return "delete record" ;
    }

}