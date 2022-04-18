package SINDUPAN.SAKU.DataController;
import SINDUPAN.SAKU.DAO.AppRoleDAO;
import SINDUPAN.SAKU.DAO.AppUserDAO;
import SINDUPAN.SAKU.Model.AppRoleModel;
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
public class GetRoleNamesController {
    @Autowired
    AppRoleDAO getrolenames;

    @GetMapping("/getroleappnames")
    public List<AppRoleModel>getroleappnames()
    {
        return getrolenames.getRoleNameApp();

    }

}
