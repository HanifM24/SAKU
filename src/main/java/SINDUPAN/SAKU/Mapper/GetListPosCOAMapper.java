package SINDUPAN.SAKU.Mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import SINDUPAN.SAKU.Model.GetListPosisiModel;
import org.springframework.jdbc.core.RowMapper;

public class GetListPosCOAMapper implements RowMapper<GetListPosisiModel> {

    public GetListPosisiModel mapRow(ResultSet rs, int rowNum) throws SQLException {
        GetListPosisiModel getListPosisiModel = new GetListPosisiModel();
        getListPosisiModel.setId(rs.getString("Id"));
        getListPosisiModel.setKET(rs.getString("KET"));
        getListPosisiModel.setIdplusket(rs.getString("idplusket"));
        return getListPosisiModel;

    }

}
