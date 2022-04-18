package SINDUPAN.SAKU.DataController;

import SINDUPAN.SAKU.JDBCTemplateService.GetListMataUangJDBCTemplate;
import SINDUPAN.SAKU.JDBCTemplateService.GetListTRXJDBCTemplate;
import SINDUPAN.SAKU.JDBCTemplateService.PostValasJDBCTemplate;
import SINDUPAN.SAKU.Model.GetListMataUangModel;
import SINDUPAN.SAKU.Model.GetListTransaksiModel;
import SINDUPAN.SAKU.Model.GetMataUangdnCurrencyModel;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


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
    public PostValasJDBCTemplate masterJDBCTemplate;
    @Autowired
    public GetListMataUangJDBCTemplate masterJDBCTemplateList;

    @GetMapping("/getmatauang")
    public Iterable <GetListMataUangModel> listmatauang()
    {
        return masterJDBCTemplateList.listmatauang();
    }

    @GetMapping("/postcurtodb")
    public int  testlagi() throws IOException {

//    void  testlagi() throws IOException {
        if(masterJDBCTemplate.checkingdata() == 0) {
            String apikey = "40db38a0-7b16-11ec-8482-1352ed8d2fa2"; // ini buat testing
            String url = "https://freecurrencyapi.net/api/v2/latest?apikey=" + apikey + "&base_currency=IDR";
            ObjectMapper mapper = new ObjectMapper();
            JsonNode jsonNode = mapper.readTree(new URL(url));
            JsonNode data = jsonNode.at("/data");
            GetMataUangdnCurrencyModel getMataUangdnCurrencyModel = mapper.treeToValue(data, GetMataUangdnCurrencyModel.class);
            masterJDBCTemplate.insertvaluetodatabase("AED", getMataUangdnCurrencyModel.getAED());
            masterJDBCTemplate.insertvaluetodatabase("ANG", getMataUangdnCurrencyModel.getANG());
            masterJDBCTemplate.insertvaluetodatabase("BAM", getMataUangdnCurrencyModel.getBAM());
            masterJDBCTemplate.insertvaluetodatabase("BBD", getMataUangdnCurrencyModel.getBBD());
            masterJDBCTemplate.insertvaluetodatabase("BMD", getMataUangdnCurrencyModel.getBMD());
            masterJDBCTemplate.insertvaluetodatabase("BYN", getMataUangdnCurrencyModel.getBYN());
            masterJDBCTemplate.insertvaluetodatabase("BZD", getMataUangdnCurrencyModel.getBZD());
            masterJDBCTemplate.insertvaluetodatabase("CLF", getMataUangdnCurrencyModel.getCLF());
            masterJDBCTemplate.insertvaluetodatabase("CUP", getMataUangdnCurrencyModel.getCUP());
            masterJDBCTemplate.insertvaluetodatabase("KWD", getMataUangdnCurrencyModel.getKWD());
            masterJDBCTemplate.insertvaluetodatabase("LTL", getMataUangdnCurrencyModel.getLTL());
            masterJDBCTemplate.insertvaluetodatabase("LVL", getMataUangdnCurrencyModel.getLVL());
            masterJDBCTemplate.insertvaluetodatabase("SBD", getMataUangdnCurrencyModel.getSBD());
            masterJDBCTemplate.insertvaluetodatabase("SHP", getMataUangdnCurrencyModel.getSHP());
            masterJDBCTemplate.insertvaluetodatabase("TOP", getMataUangdnCurrencyModel.getTOP());
            masterJDBCTemplate.insertvaluetodatabase("UYU", getMataUangdnCurrencyModel.getUYU());
            masterJDBCTemplate.insertvaluetodatabase("XCD", getMataUangdnCurrencyModel.getXCD());
            masterJDBCTemplate.insertvaluetodatabase("XDR", getMataUangdnCurrencyModel.getXDR());
            masterJDBCTemplate.insertvaluetodatabase("ZMK", getMataUangdnCurrencyModel.getZMK());
            masterJDBCTemplate.insertvaluetodatabase("ZMW", getMataUangdnCurrencyModel.getZMW());
            masterJDBCTemplate.insertvaluetodatabase("USD", getMataUangdnCurrencyModel.getUSD());
            masterJDBCTemplate.insertvaluetodatabase("AFN", getMataUangdnCurrencyModel.getAFN());
            masterJDBCTemplate.insertvaluetodatabase("JPY", getMataUangdnCurrencyModel.getJPY());
            masterJDBCTemplate.insertvaluetodatabase("ALL", getMataUangdnCurrencyModel.getALL());
            masterJDBCTemplate.insertvaluetodatabase("AMD", getMataUangdnCurrencyModel.getAMD());
            masterJDBCTemplate.insertvaluetodatabase("AOA", getMataUangdnCurrencyModel.getAOA());
            masterJDBCTemplate.insertvaluetodatabase("ARS", getMataUangdnCurrencyModel.getARS());
            masterJDBCTemplate.insertvaluetodatabase("AUD", getMataUangdnCurrencyModel.getAUD());
            masterJDBCTemplate.insertvaluetodatabase("AZN", getMataUangdnCurrencyModel.getAZN());
            masterJDBCTemplate.insertvaluetodatabase("BDT", getMataUangdnCurrencyModel.getBDT());
            masterJDBCTemplate.insertvaluetodatabase("BGN", getMataUangdnCurrencyModel.getBGN());
            masterJDBCTemplate.insertvaluetodatabase("BDT", getMataUangdnCurrencyModel.getBHD());
            masterJDBCTemplate.insertvaluetodatabase("BIF", getMataUangdnCurrencyModel.getBIF());
            masterJDBCTemplate.insertvaluetodatabase("BIH", getMataUangdnCurrencyModel.getBIH());
            masterJDBCTemplate.insertvaluetodatabase("BND", getMataUangdnCurrencyModel.getBND());
            masterJDBCTemplate.insertvaluetodatabase("BOB", getMataUangdnCurrencyModel.getBOB());
            masterJDBCTemplate.insertvaluetodatabase("BRL", getMataUangdnCurrencyModel.getBRL());
            masterJDBCTemplate.insertvaluetodatabase("BSD", getMataUangdnCurrencyModel.getBSD());
            masterJDBCTemplate.insertvaluetodatabase("BTC", getMataUangdnCurrencyModel.getBTC());
            masterJDBCTemplate.insertvaluetodatabase("BWP", getMataUangdnCurrencyModel.getBWP());
            masterJDBCTemplate.insertvaluetodatabase("BYR", getMataUangdnCurrencyModel.getBYR());
            masterJDBCTemplate.insertvaluetodatabase("CAD", getMataUangdnCurrencyModel.getCAD());
            masterJDBCTemplate.insertvaluetodatabase("CDF", getMataUangdnCurrencyModel.getCDF());
            masterJDBCTemplate.insertvaluetodatabase("CHF", getMataUangdnCurrencyModel.getCHF());
            masterJDBCTemplate.insertvaluetodatabase("CLP", getMataUangdnCurrencyModel.getCLP());
            masterJDBCTemplate.insertvaluetodatabase("CNY", getMataUangdnCurrencyModel.getCNY());
            masterJDBCTemplate.insertvaluetodatabase("COP", getMataUangdnCurrencyModel.getCOP());
            masterJDBCTemplate.insertvaluetodatabase("CRC", getMataUangdnCurrencyModel.getCRC());
            masterJDBCTemplate.insertvaluetodatabase("CUC", getMataUangdnCurrencyModel.getCUC());
            masterJDBCTemplate.insertvaluetodatabase("CVE", getMataUangdnCurrencyModel.getCVE());
            masterJDBCTemplate.insertvaluetodatabase("CZK", getMataUangdnCurrencyModel.getCZK());
            masterJDBCTemplate.insertvaluetodatabase("DJF", getMataUangdnCurrencyModel.getDJF());
            masterJDBCTemplate.insertvaluetodatabase("DKK", getMataUangdnCurrencyModel.getDKK());
            masterJDBCTemplate.insertvaluetodatabase("DOK", getMataUangdnCurrencyModel.getDOP());
            masterJDBCTemplate.insertvaluetodatabase("DZD", getMataUangdnCurrencyModel.getDZD());
            masterJDBCTemplate.insertvaluetodatabase("EGP", getMataUangdnCurrencyModel.getEGP());
            masterJDBCTemplate.insertvaluetodatabase("ERN", getMataUangdnCurrencyModel.getERN());
            masterJDBCTemplate.insertvaluetodatabase("ETB", getMataUangdnCurrencyModel.getETB());
            masterJDBCTemplate.insertvaluetodatabase("ETH", getMataUangdnCurrencyModel.getETH());
            masterJDBCTemplate.insertvaluetodatabase("EUR", getMataUangdnCurrencyModel.getEUR());
            masterJDBCTemplate.insertvaluetodatabase("ERN", getMataUangdnCurrencyModel.getERN());
            masterJDBCTemplate.insertvaluetodatabase("FJD", getMataUangdnCurrencyModel.getFJD());
            masterJDBCTemplate.insertvaluetodatabase("GBP", getMataUangdnCurrencyModel.getGBP());
            masterJDBCTemplate.insertvaluetodatabase("GEL", getMataUangdnCurrencyModel.getGEL());
            masterJDBCTemplate.insertvaluetodatabase("GHS", getMataUangdnCurrencyModel.getGHS());
            masterJDBCTemplate.insertvaluetodatabase("GMD", getMataUangdnCurrencyModel.getGMD());
            masterJDBCTemplate.insertvaluetodatabase("GBP", getMataUangdnCurrencyModel.getGBP());
            masterJDBCTemplate.insertvaluetodatabase("GNF", getMataUangdnCurrencyModel.getGNF());
            masterJDBCTemplate.insertvaluetodatabase("GTQ", getMataUangdnCurrencyModel.getGTQ());
            masterJDBCTemplate.insertvaluetodatabase("GYD", getMataUangdnCurrencyModel.getGYD());
            masterJDBCTemplate.insertvaluetodatabase("HKD", getMataUangdnCurrencyModel.getHKD());
            masterJDBCTemplate.insertvaluetodatabase("HNL", getMataUangdnCurrencyModel.getHNL());
            masterJDBCTemplate.insertvaluetodatabase("HRV", getMataUangdnCurrencyModel.getHRV());
            masterJDBCTemplate.insertvaluetodatabase("HTG", getMataUangdnCurrencyModel.getHTG());
            masterJDBCTemplate.insertvaluetodatabase("HUF", getMataUangdnCurrencyModel.getHUF());
            masterJDBCTemplate.insertvaluetodatabase("ILS", getMataUangdnCurrencyModel.getILS());
            masterJDBCTemplate.insertvaluetodatabase("INR", getMataUangdnCurrencyModel.getINR());
            masterJDBCTemplate.insertvaluetodatabase("IQD", getMataUangdnCurrencyModel.getIQD());
            masterJDBCTemplate.insertvaluetodatabase("IRR", getMataUangdnCurrencyModel.getIRR());
            masterJDBCTemplate.insertvaluetodatabase("ISK", getMataUangdnCurrencyModel.getISK());
            masterJDBCTemplate.insertvaluetodatabase("JMD", getMataUangdnCurrencyModel.getJMD());
            masterJDBCTemplate.insertvaluetodatabase("JOD", getMataUangdnCurrencyModel.getJOD());
            masterJDBCTemplate.insertvaluetodatabase("KES", getMataUangdnCurrencyModel.getKES());
            masterJDBCTemplate.insertvaluetodatabase("KGS", getMataUangdnCurrencyModel.getKGS());
            masterJDBCTemplate.insertvaluetodatabase("KHR", getMataUangdnCurrencyModel.getKHR());
            masterJDBCTemplate.insertvaluetodatabase("KMS", getMataUangdnCurrencyModel.getKMF());
            masterJDBCTemplate.insertvaluetodatabase("KRW", getMataUangdnCurrencyModel.getKRW());
            masterJDBCTemplate.insertvaluetodatabase("KYD", getMataUangdnCurrencyModel.getKYD());
            masterJDBCTemplate.insertvaluetodatabase("KZT", getMataUangdnCurrencyModel.getKZT());
            masterJDBCTemplate.insertvaluetodatabase("LAK", getMataUangdnCurrencyModel.getLAK());
            masterJDBCTemplate.insertvaluetodatabase("LBP", getMataUangdnCurrencyModel.getLBP());
            masterJDBCTemplate.insertvaluetodatabase("LKR", getMataUangdnCurrencyModel.getLKR());
            masterJDBCTemplate.insertvaluetodatabase("LRD", getMataUangdnCurrencyModel.getLRD());
            masterJDBCTemplate.insertvaluetodatabase("LSR", getMataUangdnCurrencyModel.getLSL());
            masterJDBCTemplate.insertvaluetodatabase("LTC", getMataUangdnCurrencyModel.getLTC());
            masterJDBCTemplate.insertvaluetodatabase("LYD", getMataUangdnCurrencyModel.getLYD());
            masterJDBCTemplate.insertvaluetodatabase("MAD", getMataUangdnCurrencyModel.getMAD());
            masterJDBCTemplate.insertvaluetodatabase("MDL", getMataUangdnCurrencyModel.getMDL());
            masterJDBCTemplate.insertvaluetodatabase("MGA", getMataUangdnCurrencyModel.getMGA());
            masterJDBCTemplate.insertvaluetodatabase("MKD", getMataUangdnCurrencyModel.getMKD());
            masterJDBCTemplate.insertvaluetodatabase("MOP", getMataUangdnCurrencyModel.getMOP());
            masterJDBCTemplate.insertvaluetodatabase("MMK", getMataUangdnCurrencyModel.getMMK());
            masterJDBCTemplate.insertvaluetodatabase("MNT", getMataUangdnCurrencyModel.getMNT());
            masterJDBCTemplate.insertvaluetodatabase("MWK", getMataUangdnCurrencyModel.getMWK());
            masterJDBCTemplate.insertvaluetodatabase("MXN", getMataUangdnCurrencyModel.getMXN());
            masterJDBCTemplate.insertvaluetodatabase("MYR", getMataUangdnCurrencyModel.getMYR());
            masterJDBCTemplate.insertvaluetodatabase("MZN", getMataUangdnCurrencyModel.getMZN());
            masterJDBCTemplate.insertvaluetodatabase("NAD", getMataUangdnCurrencyModel.getNAD());
            masterJDBCTemplate.insertvaluetodatabase("NGN", getMataUangdnCurrencyModel.getNGN());
            masterJDBCTemplate.insertvaluetodatabase("NIO", getMataUangdnCurrencyModel.getNIO());
            masterJDBCTemplate.insertvaluetodatabase("NOK", getMataUangdnCurrencyModel.getNOK());
            masterJDBCTemplate.insertvaluetodatabase("NPR", getMataUangdnCurrencyModel.getNPR());
            masterJDBCTemplate.insertvaluetodatabase("NZD", getMataUangdnCurrencyModel.getNZD());
            masterJDBCTemplate.insertvaluetodatabase("OMR", getMataUangdnCurrencyModel.getOMR());
            masterJDBCTemplate.insertvaluetodatabase("PAB", getMataUangdnCurrencyModel.getPAB());
            masterJDBCTemplate.insertvaluetodatabase("PEN", getMataUangdnCurrencyModel.getPEN());
            masterJDBCTemplate.insertvaluetodatabase("PGK", getMataUangdnCurrencyModel.getPGK());
            masterJDBCTemplate.insertvaluetodatabase("PHP", getMataUangdnCurrencyModel.getPHP());
            masterJDBCTemplate.insertvaluetodatabase("PKR", getMataUangdnCurrencyModel.getPKR());
            masterJDBCTemplate.insertvaluetodatabase("PLN", getMataUangdnCurrencyModel.getPLN());
            masterJDBCTemplate.insertvaluetodatabase("PYG", getMataUangdnCurrencyModel.getPYG());
            masterJDBCTemplate.insertvaluetodatabase("QAR", getMataUangdnCurrencyModel.getQAR());
            masterJDBCTemplate.insertvaluetodatabase("RON", getMataUangdnCurrencyModel.getRON());
            masterJDBCTemplate.insertvaluetodatabase("RSD", getMataUangdnCurrencyModel.getRSD());
            masterJDBCTemplate.insertvaluetodatabase("RUB", getMataUangdnCurrencyModel.getRUB());
            masterJDBCTemplate.insertvaluetodatabase("RWF", getMataUangdnCurrencyModel.getRWF());
            masterJDBCTemplate.insertvaluetodatabase("SAR", getMataUangdnCurrencyModel.getSAR());
            masterJDBCTemplate.insertvaluetodatabase("SCR", getMataUangdnCurrencyModel.getSCR());
            masterJDBCTemplate.insertvaluetodatabase("SDG", getMataUangdnCurrencyModel.getSDG());
            masterJDBCTemplate.insertvaluetodatabase("SEK", getMataUangdnCurrencyModel.getSEK());
            masterJDBCTemplate.insertvaluetodatabase("SGD", getMataUangdnCurrencyModel.getSGD());
            masterJDBCTemplate.insertvaluetodatabase("SLL", getMataUangdnCurrencyModel.getSLL());
            masterJDBCTemplate.insertvaluetodatabase("SOS", getMataUangdnCurrencyModel.getSOS());
            masterJDBCTemplate.insertvaluetodatabase("SRD", getMataUangdnCurrencyModel.getSRD());
            masterJDBCTemplate.insertvaluetodatabase("SSP", getMataUangdnCurrencyModel.getSSP());
            masterJDBCTemplate.insertvaluetodatabase("STD", getMataUangdnCurrencyModel.getSTD());
            masterJDBCTemplate.insertvaluetodatabase("SVC", getMataUangdnCurrencyModel.getSVC());
            masterJDBCTemplate.insertvaluetodatabase("SYP", getMataUangdnCurrencyModel.getSYP());
            masterJDBCTemplate.insertvaluetodatabase("SZL", getMataUangdnCurrencyModel.getSZL());
            masterJDBCTemplate.insertvaluetodatabase("THB", getMataUangdnCurrencyModel.getTHB());
            masterJDBCTemplate.insertvaluetodatabase("TJS", getMataUangdnCurrencyModel.getTJS());
            masterJDBCTemplate.insertvaluetodatabase("TMT", getMataUangdnCurrencyModel.getTMT());
            masterJDBCTemplate.insertvaluetodatabase("TND", getMataUangdnCurrencyModel.getTND());
            masterJDBCTemplate.insertvaluetodatabase("TRY", getMataUangdnCurrencyModel.getTRY());
            masterJDBCTemplate.insertvaluetodatabase("TTD", getMataUangdnCurrencyModel.getTTD());
            masterJDBCTemplate.insertvaluetodatabase("TWD", getMataUangdnCurrencyModel.getTWD());
            masterJDBCTemplate.insertvaluetodatabase("TZS", getMataUangdnCurrencyModel.getTZS());
            masterJDBCTemplate.insertvaluetodatabase("UAH", getMataUangdnCurrencyModel.getUAH());
            masterJDBCTemplate.insertvaluetodatabase("UGX", getMataUangdnCurrencyModel.getUGX());
            masterJDBCTemplate.insertvaluetodatabase("URY", getMataUangdnCurrencyModel.getURY());
            masterJDBCTemplate.insertvaluetodatabase("UZS", getMataUangdnCurrencyModel.getUZS());
            masterJDBCTemplate.insertvaluetodatabase("VND", getMataUangdnCurrencyModel.getVND());
            masterJDBCTemplate.insertvaluetodatabase("XAF", getMataUangdnCurrencyModel.getXAF());
            masterJDBCTemplate.insertvaluetodatabase("XOF", getMataUangdnCurrencyModel.getXOF());
            masterJDBCTemplate.insertvaluetodatabase("XPF", getMataUangdnCurrencyModel.getXPF());
            masterJDBCTemplate.insertvaluetodatabase("XRP", getMataUangdnCurrencyModel.getXRP());
            masterJDBCTemplate.insertvaluetodatabase("YER", getMataUangdnCurrencyModel.getYER());
            masterJDBCTemplate.insertvaluetodatabase("ZAR", getMataUangdnCurrencyModel.getZAR());
            return 1;

        }
        else
        {
            return 0;
        }

//        Double Matauagusd= getMataUangdnCurrencyModel.getUSD();
//        Double Mataangjpy= getMataUangdnCurrencyModel.getJPY();
//        Double



    }

    @PostMapping("/postcurtodbmanual")
    public void  postdbmanualcurr(String matauang, String rate) throws IOException {
        masterJDBCTemplateList.postmatauangmanual(matauang, rate);

////    void  testlagi() throws IOException {
//        if(masterJDBCTemplate.checkingdata() == 0) {
//            masterJDBCTemplateList.postmatauangmanual(matauang, rate);
//
//            return 1;
//
//        }
//        else
//        {
//            return 0;
//        }
//
////        Double Matauagusd= getMataUangdnCurrencyModel.getUSD();
////        Double Mataangjpy= getMataUangdnCurrencyModel.getJPY();
////        Double



    }





}

