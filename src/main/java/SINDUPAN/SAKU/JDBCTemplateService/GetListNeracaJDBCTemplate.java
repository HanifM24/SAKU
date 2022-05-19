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

    public List<GetNeracaModel> listDataNeraca(String tgl_trx)
    {
        String SQL = "select NO_COA,\n" +
                "NAMA_COA,\n" +
                "max(SALDO) as SALDO,\n" +
                "GROUP_COA,\n" +
                "HEADER_COA,\n" +
                "max(TGL_TRX)\n" +
                "from vw_neraca2 vn where substring(NO_COA, 1, 1) in ('1', '2', '3') and TGL_TRX<=?  \n" +
                "group by NO_COA";
        List <GetNeracaModel> getNeracaModels = jdbcTemplateObject.query(SQL, new GetDataNeracaMapper(), new Object[]{tgl_trx});
        return getNeracaModels;

    }

    public List<GetNeracaModel> listlabarugi(String tgl_trx)
    {
        String SQL = "select HEADER_COA, NO_COA, \n" +
                " NAMA_COA,\n" +
                "HEADER_COA,\n" +
                " case when substring(NO_COA, 1, 1) = '6'\n" +
                " then -max(SALDO) \n" +
                " ELSE\n" +
                " max(SALDO) end as SALDO ,\n" +
                "max(TGL_TRX)\n" +
                " GROUP_COA from vw_neraca2 vn where substring(NO_COA, 1, 1) in ('4', '6', '8', '9') and TGL_TRX<=? \n" +
                "order by NO_COA ";
        List <GetNeracaModel> getNeracaModels = jdbcTemplateObject.query(SQL, new GetDataNeracaMapper(), new Object[]{tgl_trx});
        return getNeracaModels;

    }





}
