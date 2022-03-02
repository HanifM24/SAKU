package SINDUPAN.SAKU.DataController;

import SINDUPAN.SAKU.JDBCTemplateService.GetListCOAJDBCTemplate;
import SINDUPAN.SAKU.Model.GetListCOAModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class GetListCOAController {

    @Autowired
    public GetListCOAJDBCTemplate masterJDBCTemplate;

    @GetMapping("/getCOA")
    public Iterable <GetListCOAModel> findallmaster()
    {
        return masterJDBCTemplate.listDataCOA();
    }

    @PostMapping("/postCOA")
    public void postcoa(String NO_COA, String NAMA_COA, String POSISI, String KET)
    {
        masterJDBCTemplate.create(NO_COA, NAMA_COA, POSISI, KET);
    }
    @GetMapping("/getCOAById/{nocoa}")
    public GetListCOAModel getBynocoa(@PathVariable String nocoa)
    {
        return masterJDBCTemplate.getByNOCOA(nocoa);
    }
    @GetMapping("/getnocoaplusname")
    public Iterable <GetListCOAModel> findcoanumberplusname()
    {
        return masterJDBCTemplate.datanomorcoaplusname();
    }
    @GetMapping("/employees/{id}")
    @ResponseBody
    public String getEmployeesById(@PathVariable String id) {
        return "ID: " + id;
    }


}

