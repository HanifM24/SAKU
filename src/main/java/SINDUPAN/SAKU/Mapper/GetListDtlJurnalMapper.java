package SINDUPAN.SAKU.Mapper;

import SINDUPAN.SAKU.Model.GetListTRXModel;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class GetListDtlJurnalMapper implements RowMapper<GetListTRXModel> {
    @Override
    public GetListTRXModel mapRow(ResultSet rs, int rowNum) throws SQLException
    {
        try {

            GetListTRXModel getListTransaksiModel = new GetListTRXModel();
//            getListTransaksiModel.setNO_TRXDBT(rs.getString("NO_TRXDBT"));
            getListTransaksiModel.setNO_TRX(rs.getString("NO_TRX"));
            getListTransaksiModel.setTGL_TRX(rs.getString("TGL_TRX"));
            getListTransaksiModel.setNAMA_COA(rs.getString("NAMA_COA"));
            getListTransaksiModel.setNAMA_COA(rs.getString("NAMA_COA"));
            getListTransaksiModel.setNO_COA(rs.getString("NO_COA"));
            getListTransaksiModel.setMATA_UANG(rs.getString("MATA_UANG"));
            getListTransaksiModel.setNOMINALTRXDBT(rs.getDouble("NOMINALTRXDBT"));
            getListTransaksiModel.setNOMINALTRXKDT(rs.getDouble("NOMINALTRXKDT"));
            getListTransaksiModel.setEKIVRP_DBT(rs.getDouble("EKIVRP_DBT"));
            getListTransaksiModel.setEKIVRP_KDT(rs.getDouble("EKIVRP_KDT"));
            getListTransaksiModel.setINVOICE(rs.getString("INVOICE"));
            getListTransaksiModel.setKTRG(rs.getString("KTRG"));

//        getListTransaksiModel.setKTRG_DBT(rs.getDouble("DBT_NOMINAL_VALAS")); setDBT_NOMINAL_VALAS();
//        getListTransaksiModel.setKDT_NOMINAL_VALAS(rs.getDouble("KDT_NOMINAL_VALAS"));
//        getListTransaksiModel.setINVOICE_DBT(rs.getString("INVOICE_DBT"));
//        getListTransaksiModel.setINVOICE_KDT(rs.getString("INVOICE_KDT"));
//        getListTransaksiModel.setMATA_UANG(rs.getString("MATA_UANG"));
            return getListTransaksiModel;
        }
        catch  (EmptyResultDataAccessException e) {
            return null;
        }

    }
}
