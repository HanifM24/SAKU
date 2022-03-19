package SINDUPAN.SAKU;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {
    @GetMapping("/")
    public String index(Model model)
    {
        return "redirect:/Login";
    }
    @GetMapping("/Login")
    public String ViewLogin(Model model)
    {
        return "Login";
    }
    @GetMapping("/Logout")
    public String ViewLogout(Model model)
    {
        return "redirect:Login";
    }
    @GetMapping("/Dashboard")
    public String ViewDashboard()
    {
        return "dashboard";
    }
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
    @GetMapping("/ledger")
    public String ViewMenuLedger(){return "ledger";}
    @GetMapping("/recapledger")
    public String ViewMenurecapLedger(){return "recapledger";}
    @GetMapping("/neraca_old")
    public String ViewMenuNeracaOld(){return "neraca_old";}
    @GetMapping("/neraca")
    public String ViewMenuNeraca(){return "neraca";}
    @GetMapping("/profitloss")
    public String ViewMenuprofloss(){return "profitloss";}





}
