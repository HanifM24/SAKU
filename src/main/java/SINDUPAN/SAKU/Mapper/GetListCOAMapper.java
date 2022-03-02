package SINDUPAN.SAKU.Mapper;


import java.sql.ResultSet;
import java.sql.SQLException;

import SINDUPAN.SAKU.Model.GetListCOAModel;
import org.springframework.jdbc.core.RowMapper;


public class GetListCOAMapper implements RowMapper<GetListCOAModel> {


    @Override
    public GetListCOAModel mapRow(ResultSet rs, int rowNum) throws SQLException
    {
        GetListCOAModel datadetailCOAModel = new GetListCOAModel();
        datadetailCOAModel.setNO_COA(rs.getString("NO_COA"));
        datadetailCOAModel.setNAMA_COA(rs.getString("NAMA_COA"));
        datadetailCOAModel.setPOSISI(rs.getString("POSISI"));
//        datadetailCOAModel.setMATA_UANG(rs.getString("MATA_UANG"));
        datadetailCOAModel.setKET(rs.getString("KET"));
        datadetailCOAModel.setSTATUS(rs.getInt("STATUS"));
        datadetailCOAModel.setTANGGAL(rs.getString("TANGGAL"));
        datadetailCOAModel.setDESC(rs.getString("DESC"));
//        masterModel.TANGGAL(rs.getDate("TANGGAL"));
        return datadetailCOAModel;    }



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
