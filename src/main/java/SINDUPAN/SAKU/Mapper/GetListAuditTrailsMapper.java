package SINDUPAN.SAKU.Mapper;

import SINDUPAN.SAKU.Model.GetAuditTrailsDetailModel;
import SINDUPAN.SAKU.Model.GetListTransaksiModel;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class GetListAuditTrailsMapper implements RowMapper<GetAuditTrailsDetailModel> {
    @Override
    public GetAuditTrailsDetailModel mapRow(ResultSet rs, int rowNum) throws SQLException
    {
            GetAuditTrailsDetailModel getAuditTrailsDetailModel = new GetAuditTrailsDetailModel();
            getAuditTrailsDetailModel.setDESKRIPSI(rs.getString("DESKRIPSI"));
            getAuditTrailsDetailModel.setTanggal(rs.getString("Tanggal"));
            getAuditTrailsDetailModel.setJam(rs.getString("Jam"));
            return getAuditTrailsDetailModel;
    }


}
