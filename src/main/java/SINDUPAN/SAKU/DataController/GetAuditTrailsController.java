package SINDUPAN.SAKU.DataController;
import SINDUPAN.SAKU.DAO.AppUserDAO;
import SINDUPAN.SAKU.JDBCTemplateService.GetAuditTrailsJDBCTemplate;
import SINDUPAN.SAKU.JDBCTemplateService.GetValasJDBCTemplate;
import SINDUPAN.SAKU.Model.GetAuditTrailsDetailModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class GetAuditTrailsController {
    @Autowired
    public GetAuditTrailsJDBCTemplate getAuditTrailsJDBCTemplate;

    @GetMapping("/getaudittrails")
    public List<GetAuditTrailsDetailModel> getaudittrails()
    {
        return getAuditTrailsJDBCTemplate.listAuditrails();
    }

}
