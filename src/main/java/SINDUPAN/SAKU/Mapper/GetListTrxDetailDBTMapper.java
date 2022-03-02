package SINDUPAN.SAKU.Mapper;

import SINDUPAN.SAKU.Model.GetListTRXModel;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class GetListTrxDetailDBTMapper implements RowMapper<GetListTRXModel> {
    @Override
    public GetListTRXModel mapRow(ResultSet rs, int rowNum) throws SQLException
    {
        try {

            GetListTRXModel getListTransaksiModel = new GetListTRXModel();
            getListTransaksiModel.setNO_TRXDBT(rs.getString("NO_TRXDBT"));
            getListTransaksiModel.setNO_COA_DBT(rs.getString("NO_COA_DBT"));
            getListTransaksiModel.setNAMA_COA_DBT(rs.getString("NAMA_COA_DBT"));
            getListTransaksiModel.setINVOICE_DBT(rs.getString("INVOICE_DBT"));
            getListTransaksiModel.setMATA_UANG_DBT(rs.getString("MATA_UANG_DBT"));
            getListTransaksiModel.setNOMINALTRXDBT(rs.getDouble("NOMINALTRXDBT"));
            getListTransaksiModel.setKTRG_DBT(rs.getString("KTRG_DBT"));
            getListTransaksiModel.setEKIVRP_DBT(rs.getDouble("EKIVRP_DBT"));

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
