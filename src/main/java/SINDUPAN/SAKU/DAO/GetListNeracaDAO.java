package SINDUPAN.SAKU.DAO;


import SINDUPAN.SAKU.Model.GetListTRXModel;
import SINDUPAN.SAKU.Model.GetListTransaksiModel;
import SINDUPAN.SAKU.Model.GetNeracaModel;
import org.springframework.beans.factory.annotation.Autowired;


import java.util.List;


public interface GetListNeracaDAO {
    @Autowired
//    List<GetNeracaModel> listDataNeracaold();
    List<GetNeracaModel> listDataNeraca(String tgl_trx);
    List<GetNeracaModel> listDataNeracaHeader(String tgl_trx, String prefix);
    List<GetNeracaModel> listDataNeracaDetail(String tgl_trx, String prefix);
    List<GetNeracaModel> listlabarugi(String tgl_trx);
    int countnrc();
    int countsubnrc(String tgl_trx, String prefix);
    Double total(String tgl_trx, String prefix);


}
