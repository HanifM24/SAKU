package SINDUPAN.SAKU.Mapper;

import SINDUPAN.SAKU.Model.GetListTransaksiModel;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.RowMapper;
import java.sql.ResultSet;
import java.sql.SQLException;

public class GetListTrxMapper implements RowMapper<GetListTransaksiModel> {
    @Override
    public GetListTransaksiModel mapRow(ResultSet rs, int rowNum) throws SQLException
    {
            GetListTransaksiModel getListTransaksiModel = new GetListTransaksiModel();
            getListTransaksiModel.setNO_TRX(rs.getString("NO_TRX"));
            getListTransaksiModel.setTGL_TRX(rs.getDate("TGL_TRX"));
            getListTransaksiModel.setBACK_DATE(rs.getDate("BACK_DATE"));
            getListTransaksiModel.setINPUT_BY(rs.getString("INPUT_BY"));
            getListTransaksiModel.setCHECKED_BY(rs.getString("CHECKED_BY"));
            getListTransaksiModel.setCHECKED_DATE(rs.getDate("CHECKED_DATE"));
            getListTransaksiModel.setAPPROVED_BY(rs.getString("APPROVED_BY"));
            getListTransaksiModel.setAPPROVED_DATE(rs.getDate("APPROVED_DATE"));
            getListTransaksiModel.setIS_CHECKED(rs.getString("IS_CHECKED"));
            getListTransaksiModel.setIS_APPROVED(rs.getString("IS_APPROVED"));
            getListTransaksiModel.setUPDATE_BY(rs.getString("UPDATE_BY"));
            getListTransaksiModel.setUPDATE_DATE(rs.getDate("UPDATE_DATE"));
            getListTransaksiModel.setTRX_DESCRIPTION(rs.getString("TRX_DESCRIPTION"));
            return getListTransaksiModel;
    }


}
