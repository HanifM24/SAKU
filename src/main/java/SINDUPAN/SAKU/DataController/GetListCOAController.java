package SINDUPAN.SAKU.DataController;

import SINDUPAN.SAKU.JDBCTemplateService.GetListCOAJDBCTemplate;
import SINDUPAN.SAKU.Model.GetListCOAModel;
import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.io.*;
import java.util.List;
import java.util.Map;

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
    public String postcoa(String NO_COA, String NAMA_COA, String POSISI, String KET, String GROUP_COA, String Identifier)
    {

        if(NO_COA.isBlank())
        {
            return "0";
        }
        else {
            if(masterJDBCTemplate.getByNOCOA(NO_COA) !=null)
            {
                return "2";
            }
            masterJDBCTemplate.create(NO_COA, NAMA_COA, POSISI, KET, GROUP_COA, Identifier);
            return "1";

        }

    }

    @PostMapping("/updateCOA")
    public void updatecoa(HttpServletRequest request) throws IOException
    {
        BufferedReader bufferedReader = null;
        GetListCOAModel getListCOAModel = new GetListCOAModel();
        InputStream requestBodyInput = request.getInputStream();
        StringBuilder stringBuilder = new StringBuilder();
        InputStream input = request.getInputStream();
        bufferedReader = new BufferedReader(new InputStreamReader(input));
        char[] charBuffer = new char[128];
        int bytesRead = -1;
        while ((bytesRead = bufferedReader.read(charBuffer)) > 0) {
            stringBuilder.append(charBuffer, 0, bytesRead);
        }
        String result = stringBuilder.toString();
        ObjectMapper mapper = new ObjectMapper();
        JsonNode actualobj = mapper.readTree(result);
        String namacoa;
        String keynomorcoa;
        String desc;
        int f = actualobj.size();
        for(int i = 0; i < f; i++)
        {
            JsonNode JsonNodearrname = actualobj.get(i).get("data").get("NAMA_COA");
            JsonNode JsonNodearrtype = actualobj.get(i).get("key").get("NO_COA");
            JsonNode JsonNodearrdesc = actualobj.get(i).get("data").get("DESC");
            keynomorcoa = JsonNodearrtype.toString().replaceAll("^\"|\"$", "");
            if(JsonNodearrname != null)
            {
                namacoa = JsonNodearrname.toString().replaceAll("^\"|\"$", "");
                masterJDBCTemplate.updatenama(namacoa, keynomorcoa);
            }
            else if (JsonNodearrdesc != null)
            {
                desc = JsonNodearrdesc.toString().replaceAll("^\"|\"$", "");
                masterJDBCTemplate.updatedesc(desc, keynomorcoa);
            }
            else if (JsonNodearrname !=null && JsonNodearrdesc !=null )
            {
                namacoa = JsonNodearrname.toString().replaceAll("^\"|\"$", "");
                desc = JsonNodearrdesc.toString().replaceAll("^\"|\"$", "");
                masterJDBCTemplate.updatenamadesc(namacoa, desc, keynomorcoa);
            }


//            JsonNode Jsonnodeakhir = JsonNodearr.get("data");
//            int g = JsonNodearr.size();
//            for (int z = 0; z<= g; i++ )
//            {
//                JsonNode Jsonnodeakhir = JsonNodearr.get("data");
//            }
        }



//        JsonNode JsonNode1 = actualobj.get(0);
//        JsonNode JsonNode2 = JsonNode1.get("data");
//        Map<String, String> map = mapper.readValue(result, Map.class);
        String x = "9";
        String y = x+"9";
//        String []  data  = request.getParameterValues("data");
//        String x = "9";
//        String y = x+"9";
//        String []  NAMA_COA  = request.getParameterValues("NAMA_COA");
//        String []  NO_COA  = request.getParameterValues("NO_COA");
//        String []  DESC  = request.getParameterValues("DESC");

//        for(int i=0; i <data.length; i++)
//        {
//            masterJDBCTemplate.updatenama(NAMA_COA[i], NO_COA[i]);
//
//        }
//        for(int i=0; i <NAMA_COA.length; i++)
//        {
//            masterJDBCTemplate.updatedesc(DESC[i], NO_COA[i]);
//
//        }




    }

    @GetMapping("/getCOAById/{nocoa}")
    public String getBynocoa(@PathVariable String nocoa)
    {
        return masterJDBCTemplate.getByNOCOA(nocoa);
    }
    @GetMapping("/getnocoaplusname/{Id}")
    public Iterable <GetListCOAModel> findcoanumberplusname(@PathVariable String Id)
    {
        return masterJDBCTemplate.datanomorcoaplusname(Id);
    }
    @GetMapping("/employees/{id}")
    @ResponseBody
    public String getEmployeesById(@PathVariable String id) {
        return "ID: " + id;
    }


}

