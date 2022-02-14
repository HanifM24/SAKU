package SINDUPAN.SAKU;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {
    @GetMapping("/SAKU")
    public String ViewMenuCOAList()
    {
        return "main";
    }
    @GetMapping("/SAKU_TRANSAKSI")
    public String ViewMenuTransaksi()
    {
        return "main_transaksi";
    }
    @GetMapping("/Currency")
    public String ViewMenuCurrency(){return "Currency_Menu";}
    @GetMapping("/InputTransaksi")
    public String ViewMenuInputTransaksi(){return "input_transaksi";}



}
