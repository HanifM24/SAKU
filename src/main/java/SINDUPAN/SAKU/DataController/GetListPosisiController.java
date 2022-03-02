package SINDUPAN.SAKU.DataController;

import SINDUPAN.SAKU.JDBCTemplateService.GetListMataUangJDBCTemplate;
import SINDUPAN.SAKU.JDBCTemplateService.GetListPosisiJDBCTemplate;
import SINDUPAN.SAKU.Model.GetListMataUangModel;
import SINDUPAN.SAKU.Model.GetListPosisiModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class GetListPosisiController {

    @Autowired
    public GetListPosisiJDBCTemplate masterJDBCTemplate;

    @GetMapping("/getposisi")
    public Iterable <GetListPosisiModel> listposisi()
    {
        return masterJDBCTemplate.listposisi();
    }


}

