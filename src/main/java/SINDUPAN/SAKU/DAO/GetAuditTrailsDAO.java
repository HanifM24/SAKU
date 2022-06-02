package SINDUPAN.SAKU.DAO;


import SINDUPAN.SAKU.Model.GetAuditTrailsDetailModel;
import SINDUPAN.SAKU.Model.GetDetailCurrencyModel;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;


public interface GetAuditTrailsDAO {
    @Autowired
    public List<GetAuditTrailsDetailModel> listAuditrails();



}
