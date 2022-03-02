package SINDUPAN.SAKU.JDBCTemplateService;

import SINDUPAN.SAKU.DAO.GetListNeracaDAO;
import SINDUPAN.SAKU.Mapper.GetDataNeracaMapper;
import SINDUPAN.SAKU.Mapper.GetDataNeracaOldMapper;
import SINDUPAN.SAKU.Model.GetNeracaModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class GetListNeracaJDBCTemplate implements GetListNeracaDAO {
    @Autowired
    public JdbcTemplate jdbcTemplateObject;
    @Autowired
    public List<GetNeracaModel> listDataNeracaold()
    {
        String SQL = "select * from vw_neraca vn  ";
        List <GetNeracaModel> getNeracaModels = jdbcTemplateObject.query(SQL, new GetDataNeracaOldMapper());
        return getNeracaModels;

    }
    @Autowired
    public List<GetNeracaModel> listDataNeraca()
    {
        String SQL = "select * from vw_neraca2 vn  ";
        List <GetNeracaModel> getNeracaModels = jdbcTemplateObject.query(SQL, new GetDataNeracaMapper());
        return getNeracaModels;

    }





}
