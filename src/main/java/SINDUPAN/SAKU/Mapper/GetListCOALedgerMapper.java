package SINDUPAN.SAKU.Mapper;


import SINDUPAN.SAKU.Model.GetListCOAModel;
import SINDUPAN.SAKU.Model.GetListTRXModel;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;


public class GetListCOALedgerMapper implements RowMapper<GetListTRXModel> {


    @Override
    public GetListTRXModel mapRow(ResultSet rs, int rowNum) throws SQLException
    {
        GetListTRXModel datacoaledger = new GetListTRXModel();
        datacoaledger.setNAMA_COA(rs.getString("NAMA_COA"));
        datacoaledger.setNO_COA(rs.getString("NO_COA"));
        return datacoaledger;    }



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
