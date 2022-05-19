package SINDUPAN.SAKU.DataController;

import SINDUPAN.SAKU.JDBCTemplateService.GetListTRXJDBCTemplate;
import SINDUPAN.SAKU.Model.GetListTRXModel;
import SINDUPAN.SAKU.Model.GetListTransaksiModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.*;

@RestController
@RequestMapping("/api")
public class GetListTRXController {

    @Autowired
    public GetListTRXJDBCTemplate masterJDBCTemplate;

    @GetMapping("/getTRX")
    public Iterable <GetListTransaksiModel> listmatauang()
    {
        return masterJDBCTemplate.listDataTRX();
    }

    @GetMapping("/getTRXdbtdtl/{id_trx}")
    public List<GetListTRXModel> listdetailtrxdbtdata(@PathVariable String id_trx)
    {

            return masterJDBCTemplate.listdetailtrxdbt(id_trx);

    }
    @GetMapping("/getTRXkdtdtl/{id_trx}")
    public List<GetListTRXModel> listdetailtrxkdtdata(@PathVariable String id_trx)
    {

            return masterJDBCTemplate.listdetailtrxkdt(id_trx);


    }
//    @GetMapping("/getTRXjrnldtl/{id_trx}") // wiht parameter
//    public List<GetListTRXModel> listjurnalaldetail(@PathVariable String id_trx)
//    {
//
//        return masterJDBCTemplate.listjurnal(id_trx);
//
//
//    }
    @GetMapping("/getTRXjrnldtl")
    public List<GetListTRXModel> listjurnalaldetail()
    {

        return masterJDBCTemplate.listjurnal();


    }
    @GetMapping("/getTRXjrnldtlwithparam/{datefrom}/{dateto}")
    public List<GetListTRXModel> listjurnalaldetailwithparam(@PathVariable String datefrom, @PathVariable String dateto  )
    {

        return masterJDBCTemplate.listjurnalwithparam(datefrom, dateto);


    }

    // no paarmeter
//    @GetMapping("/getTRXledger")
//    public List<GetListTRXModel> listledgerdtl()
//    {
//
//        return masterJDBCTemplate.listledger();
//
//
//    }


    @GetMapping("/getTRXledger/{nocoa}")
    public List<GetListTRXModel> listledgerdtl(@PathVariable String nocoa)
    {

        return masterJDBCTemplate.listledger(nocoa);


    }
    @GetMapping("/getcoaforledger")
    public List<GetListTRXModel> getcoaledger()
    {

        return masterJDBCTemplate.getcoaforledger();


    }

    @PostMapping("/web/feedback")
    public void testing(HttpServletRequest request) throws IOException {

        String []  NO_COA_DBT   = request.getParameterValues("NO_COA_DBT");
        String []  INVOICE_DBT  = request.getParameterValues("INVOICE_DBT");
        String []  MATA_UANG_DBT = request.getParameterValues("MATA_UANG_DBT");
        String [] NOMINALTRXDBT = request.getParameterValues("NOMINALTRXDBT");
        String [] KTRG_DBT = request.getParameterValues("KTRG_DBT");
        String [] EKIVRP_DBT = request.getParameterValues("EKVALRPDBT");

        String NOCOADBTtostring = Arrays.toString(NO_COA_DBT);
        String replaceNOCOADBT = NOCOADBTtostring.replaceAll("[()\\[\\]]", "");
        String [] NOCOADBTarray = replaceNOCOADBT.split(",");

        String INVOICEDBTtostring = Arrays.toString(INVOICE_DBT);
        String replaceINVOICEDBT = INVOICEDBTtostring.replaceAll("[()\\[\\]]", "");
        String []INVOICEDBTarray = replaceINVOICEDBT.split(",");


        String MATAUANGDBTtostring = Arrays.toString(MATA_UANG_DBT);
        String replaceMATAUANGDBT = MATAUANGDBTtostring.replaceAll("[()\\[\\]]", "");
        String []MATAUANGDBTarray = replaceMATAUANGDBT.split(",");

        String NMNLTRXDBTtostring = Arrays.toString(NOMINALTRXDBT);
        String replaceNMNLTRXDBT = NMNLTRXDBTtostring.replaceAll("[()\\[\\]]", "");
        String []NMLTRXDBTarray = replaceNMNLTRXDBT.split(",");

        String KTRGDBTtostring = Arrays.toString(KTRG_DBT);
        String replaceKTRGDBT = KTRGDBTtostring.replaceAll("[()\\[\\]]", "");
        String []KTRGDBTarray = replaceKTRGDBT.split(",");

        String EKIVDBTtostring = Arrays.toString(EKIVRP_DBT);
        String replaceEKIVDBT = EKIVDBTtostring.replaceAll("[()\\[\\]]", "");
        String []EKIVDBTarray = replaceEKIVDBT.split(",");

        String []  NO_COA_KDT  = request.getParameterValues("NO_COA_KDT");
        String []  INVOICE_KDT  = request.getParameterValues("INVOICE_KDT");
        String []  MATA_UANG_KDT = request.getParameterValues("MATA_UANG_KDT");
        String [] NOMINALTRXKDT = request.getParameterValues("NOMINALTRXKDT");
        String [] KTRG_KDT = request.getParameterValues("KTRG_KDT");
        String [] EKIVRP_KDT = request.getParameterValues("EKVALRPKDT");

        String NOCOAKDTtostring = Arrays.toString(NO_COA_KDT);
        String replaceNOCOAKDT = NOCOAKDTtostring.replaceAll("[()\\[\\]]", "");
        String [] NOCOAKDTarray = replaceNOCOAKDT.split(",");

        String INVOICEKDTtostring = Arrays.toString(INVOICE_KDT);
        String replaceINVOICEKDT = INVOICEKDTtostring.replaceAll("[()\\[\\]]", "");
        String []INVOICEKDTarray = replaceINVOICEKDT.split(",");


        String MATAUANGKDTtostring = Arrays.toString(MATA_UANG_KDT);
        String replaceMATAUANGKDT = MATAUANGKDTtostring.replaceAll("[()\\[\\]]", "");
        String []MATAUANGKDTarray = replaceMATAUANGKDT.split(",");

        String NMNLTRXKDTtostring = Arrays.toString(NOMINALTRXKDT);
        String replaceNMNLTRXKDT = NMNLTRXKDTtostring.replaceAll("[()\\[\\]]", "");
        String []NMLTRXKDTarray = replaceNMNLTRXKDT.split(",");

        String KTRGKDTtostring = Arrays.toString(KTRG_KDT);
        String replaceKTRGKDT = KTRGKDTtostring.replaceAll("[()\\[\\]]", "");
        String []KTRGKDTarray = replaceKTRGKDT.split(",");

        String EKIVKDTtostring = Arrays.toString(EKIVRP_KDT);
        String replaceEKIVKDT = EKIVKDTtostring.replaceAll("[()\\[\\]]", "");
        String []EKIVKDTarray = replaceEKIVKDT.split(",");

        masterJDBCTemplate.gnrttrxnmbr();
        String getnmrtrx = masterJDBCTemplate.gettrxnbr();

        for (int i = 0; i < NOCOADBTarray.length; i++)
        {

            masterJDBCTemplate.insertdbt(getnmrtrx,
                                        NOCOADBTarray[i],
                                        MATAUANGDBTarray[i],
                                        INVOICEDBTarray[i],
                                        NMLTRXDBTarray[i],
                                        KTRGDBTarray[i],
                                        EKIVDBTarray[i]);

        }
        for (int i = 0; i < NOCOAKDTarray.length; i++)
        {

            masterJDBCTemplate.insertkdt(getnmrtrx,
                    NOCOAKDTarray[i],
                    MATAUANGKDTarray[i],
                    INVOICEKDTarray[i],
                    NMLTRXKDTarray[i],
                    KTRGKDTarray[i],
                    EKIVKDTarray[i]);

        }

    }


}

