package SINDUPAN.SAKU.DAO;

import SINDUPAN.SAKU.Model.GetListCOAModel;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;


public interface GetListCOADAO {
//    @Autowired
    public List<GetListCOAModel> listDataCOA();

    public void create(String NO_COA, String NAMA_COA, String POSISI, String KET, String GROUP_COA, String Identifier);
    String getByNOCOA(String nocoa);
    public void updatenama(String NAMA_COA, String NO_COA);
    public void updatedesc(String NAMA_COA, String NO_COA);
    public void updatenamadesc(String NAMA_COA, String DESC, String NO_COA);

}
