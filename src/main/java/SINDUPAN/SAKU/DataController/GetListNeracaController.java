package SINDUPAN.SAKU.DataController;

import SINDUPAN.SAKU.JDBCTemplateService.GetListCOAJDBCTemplate;
import SINDUPAN.SAKU.JDBCTemplateService.GetListNeracaJDBCTemplate;
import SINDUPAN.SAKU.Model.GetListCOAModel;
import SINDUPAN.SAKU.Model.GetNeracaModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.lang.String;

import java.util.List;

@RestController
@RequestMapping("/api")
public class GetListNeracaController {

    @Autowired
    public GetListNeracaJDBCTemplate masterJDBCTemplate;

    @GetMapping("/getNeraca_old")
    public List<GetNeracaModel> listDataNeracaold()
    {
        return masterJDBCTemplate.listDataNeracaold();
    }
    @GetMapping("/getNeraca/{tgl_trx}")
    public List<GetNeracaModel> listDataNeracaVar(@PathVariable String tgl_trx)
    {
        return masterJDBCTemplate.listDataNeraca(tgl_trx);
    }
    @GetMapping("/getLabaRugi/{tgl_trx}")
    public List<GetNeracaModel> listDatalbrg(@PathVariable String tgl_trx)
    {
        return masterJDBCTemplate.listlabarugi(tgl_trx);
    }



}

