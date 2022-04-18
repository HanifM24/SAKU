package SINDUPAN.SAKU.DataController;
import SINDUPAN.SAKU.DAO.AppUserDAO;
import SINDUPAN.SAKU.Model.GetDetailCurrencyModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api")
public class AddUserController  {
    @Autowired
    AppUserDAO jdbctemplate;

    @PostMapping("/registernewuser")
    public String Submit(HttpServletRequest request) throws IOException {
        String userid = request.getParameter("userid");
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        String role_Name = request.getParameter("role_Name");
        return jdbctemplate.addUserAccount(userid, username, password, role_Name);
    }

}
