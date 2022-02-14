package SINDUPAN.SAKU.Mapper;


import SINDUPAN.SAKU.Model.GetListCOAModel;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;


public class GetDataCOAMapper implements RowMapper<GetListCOAModel> {


    @Override
    public GetListCOAModel mapRow(ResultSet rs, int rowNum) throws SQLException
    {
        GetListCOAModel datadetailCOAModel = new GetListCOAModel();
        datadetailCOAModel.setNO_COA(rs.getString("NO_COA"));
        return datadetailCOAModel;    }

}
