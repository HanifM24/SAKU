package SINDUPAN.SAKU.JDBCTemplateService;

import SINDUPAN.SAKU.DAO.GetListCOADAO;
import SINDUPAN.SAKU.Mapper.GetDataCOAMapper;
import SINDUPAN.SAKU.Mapper.GetDataCOAplusnMapper;
import SINDUPAN.SAKU.Mapper.GetListCOAMapper;
import SINDUPAN.SAKU.Model.GetListCOAModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Objects;
import java.util.Optional;


@Component
public class GetListCOAJDBCTemplate implements GetListCOADAO {
    @Autowired
    public JdbcTemplate jdbcTemplateObject;
//    @Autowired
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
                        "dc.GROUP_COA, \n" +
                        "dc.CREATED_BY, \n" +
                        "dc.CREATED_DATE, \n" +
                        "dc.CREATED_TIME, \n" +
                        "dc.UPDATED_BY, \n" +
                        "dc.UPDATED_DATE, \n" +
                        "dc.UPDATED_TIME, \n" +
                        "dc.KET as 'DESC' \n" +
                        "from daftar_coa dc \n" +
                        "inner join ref_poscoa rp on dc.POSISI = rp.Id \n" +
                        "inner join ref_headerdetail rh on dc.DETAIL = rh.Id \n" +
                        "order by NO_COA \n";
        List <GetListCOAModel> DatadetailsCOAModels = jdbcTemplateObject.query(SQL, new GetListCOAMapper());
        return DatadetailsCOAModels;

    }
    public void create( String NO_COA, String NAMA_COA, String POSISI, String KET, String GROUP_COA, String Identifier)
    {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            String currentPrincipalName = authentication.getName();
            String SQL = "call sp_addcoa(?, ?, ?, ?, ?, ?, ?);";
            jdbcTemplateObject.update(SQL, NO_COA, NAMA_COA, POSISI, KET, GROUP_COA, Identifier, currentPrincipalName);

    }
    public void updatenama(String NAMA_COA, String NO_COA)
    {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        String SQL = "update daftar_coa set NAMA_COA = ?, TANGGAL = curdate(), " +
                "UPDATED_BY = ?, UPDATED_DATE = curdate(), UPDATED_TIME = curtime() where NO_COA = ?;";
        jdbcTemplateObject.update(SQL, NAMA_COA, currentPrincipalName,  NO_COA);

    }
    public void updatedesc(String DESC, String NO_COA)
    {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        String SQL = "update daftar_coa set KET = ?, TANGGAL = curdate()," +
                "UPDATED_BY = ?, UPDATED_DATE = curdate(), UPDATED_TIME = curtime() where NO_COA = ?;";
        jdbcTemplateObject.update(SQL, DESC, currentPrincipalName, NO_COA);

    }
    public void updatenamadesc(String NAMA_COA, String DESC, String NO_COA)
    {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        String SQL = "update daftar_coa set NAMA_COA = ?, KET = ?, TANGGAL = curdate()," +
                " UPDATED_BY = ?, UPDATED_DATE = curdate(), UPDATED_TIME = curtime() where NO_COA = ?;";
        jdbcTemplateObject.update(SQL,NAMA_COA, DESC, currentPrincipalName, NO_COA);

    }
    public  String getByNOCOA(String nocoa)
    {
        String SQL = "select NO_COA from daftar_coa where NO_COA= ?";
        try {
            return jdbcTemplateObject.queryForObject(SQL, String.class, new Object[]{nocoa});
        }
        catch (EmptyResultDataAccessException e)
        {
            return null;
        }
    }
    public List<GetListCOAModel> datanomorcoaplusname(String Id)
    {
        if (Objects.equals(Id, "0")) {
            String SQL = " select \n" +
                    "NO_COA,\n" +
                    "NAMA_COA, \n" +
                    "concat(NO_COA, ' - ', NAMA_COA) as NOPLUSNAMACOADBT,\n" +
                    "concat(NO_COA, ' - ', NAMA_COA) as NOPLUSNAMACOAKDT\n" +
                    "from daftar_coa dc\n" +
                    "where dc.DETAIL != 1;";
            List<GetListCOAModel> datacoaplusname = jdbcTemplateObject.query(SQL, new GetDataCOAplusnMapper());
            return datacoaplusname;
        }
        else
        {
            String SQL = " select \n" +
                    "NO_COA,\n" +
                    "NAMA_COA, \n" +
                    "concat(NO_COA, ' - ', NAMA_COA) as NOPLUSNAMACOADBT,\n" +
                    "concat(NO_COA, ' - ', NAMA_COA) as NOPLUSNAMACOAKDT\n" +
                    "from daftar_coa dc\n" +
                    "where dc.DETAIL = 1;";
            List<GetListCOAModel> datacoaplusname = jdbcTemplateObject.query(SQL, new GetDataCOAplusnMapper());
            return datacoaplusname;
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








}
