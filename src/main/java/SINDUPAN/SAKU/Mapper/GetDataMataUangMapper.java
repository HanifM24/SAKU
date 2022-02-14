package SINDUPAN.SAKU.Mapper;


import SINDUPAN.SAKU.Model.GetListCOAModel;
import SINDUPAN.SAKU.Model.GetListMataUangModel;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;


public class GetDataMataUangMapper implements RowMapper<GetListMataUangModel> {


    @Override
    public GetListMataUangModel mapRow(ResultSet rs, int rowNum) throws SQLException
    {
        GetListMataUangModel getListMataUangModel = new GetListMataUangModel();
        getListMataUangModel.setId(rs.getString("Id"));
        getListMataUangModel.setKET(rs.getString("KET"));
        getListMataUangModel.setKODE_ALFABET(rs.getString("KODE_ALFABET"));
        getListMataUangModel.setKODEPLUSNAMAUANGDBT(rs.getString("KODEPLUSNAMAUANGDBT"));
        getListMataUangModel.setKODEPLUSNAMAUANGKDT(rs.getString("KODEPLUSNAMAUANGKDT"));
        return getListMataUangModel;    }



    //buat test
//    @Override
//    public MasterModel mapRow(ResultSet rs, int rowNum) throws SQLException
//    {
//        MasterModel masterModel = new MasterModel();
//        masterModel.setNO_COA(rs.getInt("NO_COA1"));
//        masterModel.setNAMA_COA(rs.getString("NAMA_COA"));
//        masterModel.setKET(rs.getString("KET"));
////        masterModel.TANGGAL(rs.getDate("TANGGAL"));
//        return masterModel;
//    }


}
