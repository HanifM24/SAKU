package SINDUPAN.SAKU.JDBCTemplateService;

import SINDUPAN.SAKU.DAO.GetListMataUangDAO;
import SINDUPAN.SAKU.Mapper.GetDataMataUangMapper;
import SINDUPAN.SAKU.Mapper.GetListCOAMapper;
import SINDUPAN.SAKU.Model.GetListCOAModel;
import SINDUPAN.SAKU.Model.GetListMataUangModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class GetListMataUangJDBCTemplate implements GetListMataUangDAO {
    @Autowired
    public JdbcTemplate jdbcTemplateObject;
    @Autowired
    public List<GetListMataUangModel> listmatauang()
    {
        String SQL = "select \n" +
                "Id,\n" +
                "KET,\n" +
                "KODE_ALFABET,\n" +
                "concat(Id, ' - ', KODE_ALFABET) as KODEPLUSNAMAUANGDBT,\n" +
                "concat(Id, ' - ', KODE_ALFABET) as KODEPLUSNAMAUANGKDT\n" +
                "from ref_mata_uang rmu";
        List <GetListMataUangModel> getListMataUangModels = jdbcTemplateObject.query(SQL, new GetDataMataUangMapper());
        return getListMataUangModels;

    }

    public void postmatauangmanual(String MATAUANG, String RATE)
    {
        String SQL = "insert into currencyvalue (KD_MATA_UANG, RATE, UPDATE_DATE) \n" +
                " values (?, ?, now());";
        jdbcTemplateObject.update(SQL, MATAUANG, RATE);


    }
    }

//    @Autowired
//    public DataSource dataSource;
//    @Autowired
//    public void setDataSource(DataSource ds) {
//        dataSource = ds;
//        jdbcTemplateObject = new JdbcTemplate(dataSource);
//
//    }

//    buat test
//    @Autowired
//    public List<MasterModel> listMaster()
//    {
//        String SQL = "select NO_COA as 'NO_COA1', NAMA_COA, TANGGAL, KET from master_akutansi";
//        List <MasterModel> MasterModels = jdbcTemplateObject.query(SQL, new MasterMapper());
//        return MasterModels;
//
//    }









