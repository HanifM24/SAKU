package SINDUPAN.SAKU.DataController;

import SINDUPAN.SAKU.JDBCTemplateService.GetListMataUangJDBCTemplate;
import SINDUPAN.SAKU.JDBCTemplateService.GetListTRXJDBCTemplate;
import SINDUPAN.SAKU.Model.GetListMataUangModel;
import SINDUPAN.SAKU.Model.GetListTransaksiModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class GetListMataUangController {

    @Autowired
    public GetListMataUangJDBCTemplate masterJDBCTemplate;

    @GetMapping("/getmatauang")
    public Iterable <GetListMataUangModel> listmatauang()
    {
        return masterJDBCTemplate.listmatauang();
    }


}

