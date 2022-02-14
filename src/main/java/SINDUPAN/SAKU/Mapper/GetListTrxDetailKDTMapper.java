package SINDUPAN.SAKU.Mapper;

import SINDUPAN.SAKU.Model.GetListTRXModel;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class GetListTrxDetailKDTMapper implements RowMapper<GetListTRXModel> {
    @Override
    public GetListTRXModel mapRow(ResultSet rs, int rowNum) throws SQLException
    {
        try {
            GetListTRXModel getListTransaksiModel = new GetListTRXModel();
            getListTransaksiModel.setNO_TRXKDT(rs.getString("NO_TRXKDT"));
            getListTransaksiModel.setNO_COA_KDT(rs.getString("NO_COA_KDT"));
            getListTransaksiModel.setINVOICE_KDT(rs.getString("INVOICE_KDT"));
            getListTransaksiModel.setMATA_UANG_KDT(rs.getString("MATA_UANG_KDT"));
            getListTransaksiModel.setNOMINALTRXKDT(rs.getDouble("NOMINALTRXKDT"));
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
