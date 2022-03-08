package SINDUPAN.SAKU.DAO;


import SINDUPAN.SAKU.Model.GetDetailCurrencyModel;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;


public interface GetValasDAO {
    @Autowired
    public List<GetDetailCurrencyModel> getdetailcurrency();



}
