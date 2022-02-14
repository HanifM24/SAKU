package SINDUPAN.SAKU.DAO;


import SINDUPAN.SAKU.Model.GetListTRXModel;
import SINDUPAN.SAKU.Model.GetListTransaksiModel;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;


public interface GetListTRXDAO {
    @Autowired
    List<GetListTransaksiModel> listDataTRX();
    List<GetListTRXModel> listdetailtrxdbt(String id_trx);
    List<GetListTRXModel> listdetailtrxkdt(String id_trx);
    String gettrxnbr();
    void insertdbt(String NO_TRX, String NO_COA, String INVOICE, String MATA_UANG, String NOMINAL_DBT, String KTRG_DBT);
    void insertkdt(String NO_TRX, String NO_COA, String INVOICE, String MATA_UANG, String NOMINAL_DBT, String KTRG_DBT);

//    public void create(String NO_COA, String NAMA_COA, String POSISI);

}
