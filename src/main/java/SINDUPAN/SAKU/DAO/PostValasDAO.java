package SINDUPAN.SAKU.DAO;


import SINDUPAN.SAKU.Model.GetListTRXModel;
import SINDUPAN.SAKU.Model.GetListTransaksiModel;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;


public interface PostValasDAO {
    @Autowired
    public void insertvaluetodatabase(String KODE, Double Rate);



}
