package SINDUPAN.SAKU.DataController;
import SINDUPAN.SAKU.DAO.AppRoleDAO;
import SINDUPAN.SAKU.DAO.AppUserDAO;
import java.security.Principal;
import SINDUPAN.SAKU.Model.AppRoleModel;
import SINDUPAN.SAKU.Model.AppUserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class GetUserNamesController {
    @Autowired
    AppUserDAO getNameUser;

    @GetMapping("/getuserappnames")
    public String getusernames()
    {
        String username;
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (principal instanceof UserDetails) {
            username = ((UserDetails)principal).getUsername();
        } else {
            username = principal.toString();
        }
        return username;
    }

//    @PostMapping("/insaudittrails")
//    void audittrails()
//    {
//        String username;
//        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//        if (principal instanceof UserDetails) {
//            username = ((UserDetails)principal).getUsername();
//        } else {
//            username = principal.toString();
//        }
//
//    }




}
