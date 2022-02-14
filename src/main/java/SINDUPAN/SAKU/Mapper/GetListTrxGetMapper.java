package SINDUPAN.SAKU.Mapper;

import SINDUPAN.SAKU.Model.GetListTRXModel;
import SINDUPAN.SAKU.Model.GetListTransaksiModel;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class GetListTrxGetMapper implements RowMapper<GetListTRXModel> {
    @Override
    public GetListTRXModel mapRow(ResultSet rs, int rowNum) throws SQLException
    {
        GetListTRXModel getListTRXModel = new GetListTRXModel();
        getListTRXModel.setNO_COA_DBT(rs.getString("NO_COA_DBT"));
        return getListTRXModel;
    }
}
