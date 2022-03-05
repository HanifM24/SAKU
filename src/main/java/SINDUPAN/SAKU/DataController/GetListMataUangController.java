package SINDUPAN.SAKU.DataController;

import SINDUPAN.SAKU.JDBCTemplateService.GetListMataUangJDBCTemplate;
import SINDUPAN.SAKU.JDBCTemplateService.GetListTRXJDBCTemplate;
import SINDUPAN.SAKU.Model.GetListMataUangModel;
import SINDUPAN.SAKU.Model.GetListTransaksiModel;
import SINDUPAN.SAKU.Model.GetMataUangdnCurrencyModel;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import javax.servlet.http.HttpServletRequest;
import java.io.BufferedReader;
import java.io.DataInput;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

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

    @GetMapping("/getcurrency")
    public GetMataUangdnCurrencyModel testlagi() throws IOException {
//    void  testlagi() throws IOException {
        String apikey = "40db38a0-7b16-11ec-8482-1352ed8d2fa2"; // ini buat testing
        String url = "https://freecurrencyapi.net/api/v2/latest?apikey=" + apikey + "&base_currency=IDR";
        ObjectMapper mapper = new ObjectMapper();
        JsonNode jsonNode = mapper.readTree(new URL(url));
        JsonNode data = jsonNode.at("/data");
        GetMataUangdnCurrencyModel getMataUangdnCurrencyModel = mapper.treeToValue(data, GetMataUangdnCurrencyModel.class);
        Double Matauagusd= getMataUangdnCurrencyModel.getUSD();
        Double Mataangjpy= getMataUangdnCurrencyModel.getJPY();


        return getMataUangdnCurrencyModel;
    }





}

