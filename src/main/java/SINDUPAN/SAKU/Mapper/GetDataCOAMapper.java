package SINDUPAN.SAKU.Mapper;


import SINDUPAN.SAKU.Model.GetListCOAModel;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;


public class GetDataCOAMapper implements RowMapper<GetListCOAModel> {


    @Override
    public GetListCOAModel mapRow(ResultSet rs, int rowNum) throws SQLException {
        try {
            GetListCOAModel datadetailCOAModel = new GetListCOAModel();
            datadetailCOAModel.setNO_COA(rs.getString("NO_COA"));
            return datadetailCOAModel;

        }
        catch  (EmptyResultDataAccessException e) {
            e.getMessage();
            return null;
        }
    }


}
