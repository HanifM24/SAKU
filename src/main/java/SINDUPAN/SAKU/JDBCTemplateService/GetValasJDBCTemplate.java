package SINDUPAN.SAKU.JDBCTemplateService;

import SINDUPAN.SAKU.DAO.GetValasDAO;
import SINDUPAN.SAKU.DAO.PostValasDAO;
import SINDUPAN.SAKU.Mapper.*;
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
public class GetValasJDBCTemplate implements GetValasDAO {
    @Autowired
    public JdbcTemplate jdbcTemplateObject;
    @Autowired
    public List<GetListTransaksiModel> listDataTRX()
    {
        String SQL = "SELECT * FROM trx_master";
        List <GetListTransaksiModel> DatadetailsTRXModels = jdbcTemplateObject.query(SQL, new GetListTrxMapper());
        return DatadetailsTRXModels;

    }

    public List<GetListTRXModel>listjurnal() // no parameter
    {
        String SQL = "select * from vw_jurnal";
        return jdbcTemplateObject.query(SQL, new GetListDtlJurnalMapper());
    }
//    public List<GetListTRXModel>listledger() //no parameter
//    {
//        String SQL = "call sp_getledger()";
//        return jdbcTemplateObject.query(SQL, new GetListLedgerMapper());
//    }

    public List<GetListTRXModel>listledger(String nocoa)
    {
        String SQL = "call sp_getledger(?)";
        return jdbcTemplateObject.query(SQL, new GetListLedgerMapper(), new Object[]{nocoa});
    }
    public List<GetListTRXModel>getcoaforledger()
    {
        String SQL = "select \n" +
                "dc.NAMA_COA as 'NAMA_COA', \n" +
                "td.NO_COA_DBT as 'NO_COA'\n" +
                "from trx_debit td\n" +
                "join daftar_coa dc on td.NO_COA_DBT = dc.NO_COA \n" +
                "union \n" +
                "select \n" +
                "dc.NAMA_COA as 'NAMA_COA', \n" +
                "tk.NO_COA_KDT as 'NO_COA'\n" +
                "from trx_kredit tk \n" +
                "join daftar_coa dc on tk.NO_COA_KDT = dc.NO_COA ";
        List <GetListTRXModel> DatadetailsTRXModels = jdbcTemplateObject.query(SQL, new GetListCOALedgerMapper());
        return DatadetailsTRXModels;
    }



    public List<GetListTRXModel> listdetailtrxdbt(String id_trx)
    {
//        String SQL = "SELECT * FROM trx_debit where NO_TRXDBT=?";
        String SQL = "select \n" +
                "td.NO_TRXDBT ,\n" +
                "td.NO_COA_DBT,\n" +
                "dc.NAMA_COA  as NAMA_COA_DBT,\n" +
                "rmu.KET as MATA_UANG_DBT,\n" +
                "td.INVOICE_DBT,\n" +
                "td.NOMINALTRXDBT,\n" +
                "td.KTRG_DBT \n" +
                "from trx_debit td\n" +
                "join daftar_coa dc on td.NO_COA_DBT = dc.NO_COA  \n" +
                "join ref_mata_uang rmu on td.MATA_UANG_DBT = rmu.Id  \n" +
                "where NO_TRXDBT = ?";
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
//        String SQL = "SELECT * FROM trx_kredit where NO_TRXKDT=?";
        String SQL ="select \n" +
                "td.NO_TRXKDT ,\n" +
                "td.NO_COA_KDT,\n" +
                "dc.NAMA_COA  as NAMA_COA_KDT,\n" +
                "rmu.KET as MATA_UANG_KDT,\n" +
                "td.INVOICE_KDT,\n" +
                "td.NOMINALTRXKDT,\n" +
                "td.KTRG_KDT \n" +
                "from trx_kredit td\n" +
                "join daftar_coa dc on td.NO_COA_KDT = dc.NO_COA  \n" +
                "join ref_mata_uang rmu on td.MATA_UANG_KDT = rmu.Id  \n" +
                "where NO_TRXKDT = ?";
        try {
            return  jdbcTemplateObject.query(SQL, new GetListTrxDetailKDTMapper(), new Object[]{id_trx});
        }
        catch  (EmptyResultDataAccessException e) {
            return null;
        }
    }
    public List<GetDetailCurrencyModel> getdetailcurrency()
    {
        String SQL = "select \n" +
                "c.KD_MATA_UANG,\n" +
                "rmu.KET as 'NAMA_MATA_UANG',\n" +
                "c.RATE,\n" +
                "date(c.UPDATE_DATE) as 'UPDATE_DATE',\n" +
                "time(c.UPDATE_DATE) as 'UPDATE_TIME',\n" +
                "c.UPDATE_BY \n" +
                "from currencyvalue c\n" +
                "left join ref_mata_uang rmu on c.KD_MATA_UANG = rmu.KODE_ALFABET \n" +
                "WHERE date(UPDATE_DATE) = curdate()";
        return jdbcTemplateObject.query(SQL, new GetDetailCurrencyMapper());
    }
    public int checkingdata()
    {
        String SQL = "  \n" +
                "select EXISTS (SELECT * FROM currencyvalue WHERE date(UPDATE_DATE) = curdate())\n";
        int result = jdbcTemplateObject.queryForObject(SQL, int.class);
        return result;
    }

    public void insertvaluetodatabase(String KODE, Double Rate)
    {
        LocalDateTime getdate = LocalDateTime.now();
        String SQL = "insert into currencyvalue\n" +
                "(KD_MATA_UANG, RATE, UPDATE_DATE, UPDATE_BY)\n" +
                "values \n" +
                "(?, ?, ?, ?)";
        jdbcTemplateObject.update(SQL,KODE, Rate, LocalDateTime.now(), null );
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
