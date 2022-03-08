package SINDUPAN.SAKU.DataController;

import SINDUPAN.SAKU.JDBCTemplateService.GetValasJDBCTemplate;
import SINDUPAN.SAKU.JDBCTemplateService.PostValasJDBCTemplate;
import SINDUPAN.SAKU.Model.GetDetailCurrencyModel;
import SINDUPAN.SAKU.Model.GetMataUangdnCurrencyModel;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.net.URL;
import java.util.List;

@RestController
@RequestMapping("/api")
public class GetDetailCurrController {

    @Autowired
    public GetValasJDBCTemplate masterJDBCTemplate;



    @GetMapping("/getdetailcur")
    public List<GetDetailCurrencyModel> testlagi()  {
        return masterJDBCTemplate.getdetailcurrency();
    }





}

