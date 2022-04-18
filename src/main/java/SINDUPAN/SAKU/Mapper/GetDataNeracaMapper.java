package SINDUPAN.SAKU.Mapper;


import SINDUPAN.SAKU.Model.GetNeracaModel;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;


public class GetDataNeracaMapper implements RowMapper<GetNeracaModel> {


    @Override
    public GetNeracaModel mapRow(ResultSet rs, int rowNum) throws SQLException
    {
        GetNeracaModel dataneracamodel = new GetNeracaModel();
        dataneracamodel.setNOCOA(rs.getString("NO_COA"));
        dataneracamodel.setNAMACOA(rs.getString("NAMA_COA"));
        dataneracamodel.setSALDO(rs.getDouble("SALDO"));
        dataneracamodel.setGROUP_COA(rs.getString("GROUP_COA"));
        dataneracamodel.setHEADER_COA(rs.getString("HEADER_COA"));
        return dataneracamodel;    }

}
