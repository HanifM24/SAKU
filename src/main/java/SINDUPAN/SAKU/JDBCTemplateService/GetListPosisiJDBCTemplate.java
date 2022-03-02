package SINDUPAN.SAKU.JDBCTemplateService;

import SINDUPAN.SAKU.DAO.GetListMataUangDAO;
import SINDUPAN.SAKU.DAO.GetListPosisiDAO;
import SINDUPAN.SAKU.Mapper.GetDataMataUangMapper;
import SINDUPAN.SAKU.Mapper.GetListPosCOAMapper;
import SINDUPAN.SAKU.Model.GetListMataUangModel;
import SINDUPAN.SAKU.Model.GetListPosisiModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class GetListPosisiJDBCTemplate implements GetListPosisiDAO {
    @Autowired
    public JdbcTemplate jdbcTemplateObject;
    @Autowired
    public List<GetListPosisiModel> listposisi()
    {
        String SQL = "select Id,\n" +
                "KET,\n" +
                "concat(Id, ' - ', KET) as idplusket\n" +
                "from ref_poscoa rp \n";
        List <GetListPosisiModel> getListPosisiModels = jdbcTemplateObject.query(SQL, new GetListPosCOAMapper());
        return getListPosisiModels;

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









