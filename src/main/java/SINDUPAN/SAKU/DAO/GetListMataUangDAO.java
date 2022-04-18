package SINDUPAN.SAKU.DAO;

import SINDUPAN.SAKU.Model.GetListMataUangModel;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;


public interface GetListMataUangDAO {
    @Autowired
    public List<GetListMataUangModel> listmatauang();

    public void postmatauangmanual(String matauang, String rate);

//    public void create(String NO_COA, String NAMA_COA, String POSISI);

}
