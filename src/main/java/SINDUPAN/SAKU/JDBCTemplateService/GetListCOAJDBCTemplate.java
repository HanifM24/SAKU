package SINDUPAN.SAKU.JDBCTemplateService;

import SINDUPAN.SAKU.DAO.GetListCOADAO;
import SINDUPAN.SAKU.Mapper.GetDataCOAMapper;
import SINDUPAN.SAKU.Mapper.GetDataCOAplusnMapper;
import SINDUPAN.SAKU.Mapper.GetListCOAMapper;
import SINDUPAN.SAKU.Model.GetListCOAModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;


@Component
public class GetListCOAJDBCTemplate implements GetListCOADAO {
    @Autowired
    public JdbcTemplate jdbcTemplateObject;
    @Autowired
    public List<GetListCOAModel> listDataCOA()
    {
        String SQL =
                "select \n" +
                        "dc.NO_COA as 'NO_COA', \n" +
                        "dc.NAMA_COA as 'NAMA_COA',\n" +
                        "dc.TANGGAL as 'TANGGAL', \n" +
                        "rp.KET as 'POSISI',\n" +
                        "rh.KET, \n" +
                        "dc.STATUS, \n" +
                        "dc.KET as 'DESC' \n" +
                        "from daftar_coa dc \n" +
                        "inner join ref_poscoa rp on dc.POSISI = rp.Id \n" +
                        "inner join ref_headerdetail rh on dc.HEADER = rh.Id \n" +
                        "order by NO_COA \n";
        List <GetListCOAModel> DatadetailsCOAModels = jdbcTemplateObject.query(SQL, new GetListCOAMapper());
        return DatadetailsCOAModels;

    }
    public void create( String NO_COA, String NAMA_COA, String POSISI, String KET)
    {
        String SQL = "call sp_addcoa(?, ?, ?, ? );";
        jdbcTemplateObject.update(SQL, NO_COA, NAMA_COA, POSISI, KET);
    }
    public GetListCOAModel getByNOCOA(String nocoa)
    {
        String SQL = "select NO_COA from daftar_coa where NO_COA= ?";
        return jdbcTemplateObject.queryForObject(SQL, new GetDataCOAMapper(), new Object[]{nocoa});
    }
    public List<GetListCOAModel> datanomorcoaplusname()
    {
        String SQL = "select \n" +
                "NO_COA,\n" +
                "NAMA_COA, \n" +
                "concat(NO_COA, ' - ', NAMA_COA) as NOPLUSNAMACOADBT,\n" +
                "concat(NO_COA, ' - ', NAMA_COA) as NOPLUSNAMACOAKDT\n" +
                "from daftar_coa dc;";
        List <GetListCOAModel> datacoaplusname = jdbcTemplateObject.query(SQL, new GetDataCOAplusnMapper());
        return datacoaplusname;

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








}
