package SINDUPAN.SAKU.DAO;

import SINDUPAN.SAKU.Model.GetListMataUangModel;
import SINDUPAN.SAKU.Model.GetListPosisiModel;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;


public interface GetListPosisiDAO {
    @Autowired
    public List<GetListPosisiModel> listposisi();

//    public void create(String NO_COA, String NAMA_COA, String POSISI);

}
