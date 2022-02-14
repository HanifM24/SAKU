package SINDUPAN.SAKU.JDBCTemplateService;

import SINDUPAN.SAKU.DAO.GetListTRXDAO;
import SINDUPAN.SAKU.Mapper.GetListTrxDetailDBTMapper;
import SINDUPAN.SAKU.Mapper.GetListTrxDetailKDTMapper;
import SINDUPAN.SAKU.Mapper.GetListTrxMapper;
import SINDUPAN.SAKU.Model.GetListTRXModel;
import SINDUPAN.SAKU.Model.GetListTransaksiModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class GetListTRXJDBCTemplate implements GetListTRXDAO {
    @Autowired
    public JdbcTemplate jdbcTemplateObject;
    @Autowired
    public List<GetListTransaksiModel> listDataTRX()
    {
        String SQL = "SELECT * FROM trx_master";
        List <GetListTransaksiModel> DatadetailsTRXModels = jdbcTemplateObject.query(SQL, new GetListTrxMapper());
        return DatadetailsTRXModels;

    }
    public List<GetListTRXModel> listdetailtrxdbt(String id_trx)
    {
        String SQL = "SELECT * FROM trx_debit where NO_TRXDBT=?";
        try {
            List<GetListTRXModel> datadetailstrx = jdbcTemplateObject.query(SQL, new GetListTrxDetailDBTMapper(), new Object[]{id_trx});
            return datadetailstrx;
        }
        catch  (EmptyResultDataAccessException e) {
            return null;
        }
    }
    public List<GetListTRXModel> listdetailtrxkdt(String id_trx)
    {
        String SQL = "SELECT * FROM trx_kredit where NO_TRXKDT=?";
        try {
            return  jdbcTemplateObject.query(SQL, new GetListTrxDetailKDTMapper(), new Object[]{id_trx});
        }
        catch  (EmptyResultDataAccessException e) {
            return null;
        }
    }
    public void gnrttrxnmbr()
    {
        String SQL = "insert into trx_master (TGL_TRX) values(curdate())";
        jdbcTemplateObject.update(SQL);
    }
    public String gettrxnbr ()
    {

        String SQL ="select MAX(NO_TRX) from trx_master tm";
        return jdbcTemplateObject.queryForObject(SQL, String.class );
    }


    public void insertdbt(String NO_TRX, String NO_COA, String MATA_UANG,  String INVOICE, String NOMINAL_DBT, String KTRG_DBT)
    {
        String SQL = "call sp_addtrxdbt(?, ?, ?, ?, ?, ?)";
        jdbcTemplateObject.update(SQL,
                NO_TRX,
                NO_COA,
                MATA_UANG,
                INVOICE,
                NOMINAL_DBT,
                KTRG_DBT
                );
    }
    public void insertkdt(String NO_TRX, String NO_COA, String MATA_UANG,  String INVOICE, String NOMINAL_DBT, String KTRG_DBT)
    {
        String SQL = "call sp_addtrxkdt(?, ?, ?, ?, ?, ?)";
        jdbcTemplateObject.update(SQL,
                NO_TRX,
                NO_COA,
                MATA_UANG,
                INVOICE,
                NOMINAL_DBT,
                KTRG_DBT
        );
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
