package SINDUPAN.SAKU.DAO;

import SINDUPAN.SAKU.Model.GetListCOAModel;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;


public interface GetListCOADAO {
    @Autowired
    public List<GetListCOAModel> listDataCOA();

     void create(String NO_COA, String NAMA_COA, String POSISI, String KET);
     GetListCOAModel getByNOCOA(String nocoa);

}
