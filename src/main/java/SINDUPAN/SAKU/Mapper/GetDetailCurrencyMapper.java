package SINDUPAN.SAKU.Mapper;

import SINDUPAN.SAKU.Model.GetDetailCurrencyModel;
import SINDUPAN.SAKU.Model.GetListTRXModel;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class GetDetailCurrencyMapper implements RowMapper<GetDetailCurrencyModel> {
    @Override
    public GetDetailCurrencyModel mapRow(ResultSet rs, int rowNum) throws SQLException
    {
        GetDetailCurrencyModel getDetailCurrencyModel = new GetDetailCurrencyModel();
        getDetailCurrencyModel.setKD_MATA_UANG(rs.getString("KD_MATA_UANG"));
        getDetailCurrencyModel.setNAMA_MATA_UANG(rs.getString("NAMA_MATA_UANG"));
        getDetailCurrencyModel.setRATE(rs.getDouble("RATE"));
        getDetailCurrencyModel.setUPDATE_DATE(rs.getDate("UPDATE_DATE"));
        getDetailCurrencyModel.setUPDATE_TIME(rs.getTime("UPDATE_TIME"));
        return getDetailCurrencyModel;
    }
}
