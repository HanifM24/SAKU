package SINDUPAN.SAKU.JDBCTemplateService;

import SINDUPAN.SAKU.DAO.GetAuditTrailsDAO;
import SINDUPAN.SAKU.DAO.GetValasDAO;
import SINDUPAN.SAKU.Mapper.*;
import SINDUPAN.SAKU.Model.GetAuditTrailsDetailModel;
import SINDUPAN.SAKU.Model.GetDetailCurrencyModel;
import SINDUPAN.SAKU.Model.GetListTRXModel;
import SINDUPAN.SAKU.Model.GetListTransaksiModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;


@Component
public class GetAuditTrailsJDBCTemplate implements GetAuditTrailsDAO {
    @Autowired
    public JdbcTemplate jdbcTemplateObject;
    @Autowired
    public List<GetAuditTrailsDetailModel> listAuditrails()
    {
        String SQL = "SELECT * FROM audit_trail";
        return jdbcTemplateObject.query(SQL, new GetListAuditTrailsMapper());


    }





}
