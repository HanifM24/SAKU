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
        String SQL = "select * from vw_neraca2 vn where substring(NO_COA, 1, 1) in ('1', '2')  ";
        List <GetNeracaModel> getNeracaModels = jdbcTemplateObject.query(SQL, new GetDataNeracaMapper());
        return getNeracaModels;

    }
    @Autowired
    public List<GetNeracaModel> listlabarugi()
    {
        String SQL = "select NO_COA, \n" +
                " NAMA_COA,\n" +
                " case when substring(NO_COA, 1, 1) = '6'\n" +
                " then -SALDO \n" +
                " ELSE\n" +
                " SALDO end as SALDO ,\n" +
                " GROUP_COA from vw_neraca2 vn where substring(NO_COA, 1, 1) in ('4', '6', '8', '9')  " +
                "order by NO_COA ";
        List <GetNeracaModel> getNeracaModels = jdbcTemplateObject.query(SQL, new GetDataNeracaMapper());
        return getNeracaModels;

    }





}
