package SINDUPAN.SAKU.Mapper;


import SINDUPAN.SAKU.Model.GetListCOAModel;
import SINDUPAN.SAKU.Model.GetNeracaModel;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;


public class GetDataNeracaOldMapper implements RowMapper<GetNeracaModel> {


    @Override
    public GetNeracaModel mapRow(ResultSet rs, int rowNum) throws SQLException
    {
        GetNeracaModel dataneracamodel = new GetNeracaModel();
        dataneracamodel.setNOCOA(rs.getString("NO_COA"));
        dataneracamodel.setNAMACOA(rs.getString("NAMA_COA"));
        dataneracamodel.setDEBIT(rs.getDouble("DEBIT"));
        dataneracamodel.setKREDIT(rs.getDouble("KREDIT"));
        return dataneracamodel;    }

}
