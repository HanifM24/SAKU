package SINDUPAN.SAKU.DataController;

import SINDUPAN.SAKU.JDBCTemplateService.GetListCOAJDBCTemplate;
import SINDUPAN.SAKU.JDBCTemplateService.GetListNeracaJDBCTemplate;
import SINDUPAN.SAKU.Model.GetListCOAModel;
import SINDUPAN.SAKU.Model.GetNeracaModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    @GetMapping("/getNeraca")
    public List<GetNeracaModel> listDataNeraca()
    {
        return masterJDBCTemplate.listDataNeraca();
    }
    @GetMapping("/getLabaRugi")
    public List<GetNeracaModel> listDatalbrg()
    {
        return masterJDBCTemplate.listlabarugi();
    }



}

