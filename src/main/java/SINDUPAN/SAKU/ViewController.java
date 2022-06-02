package SINDUPAN.SAKU;

import com.google.gson.Gson;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.security.Principal;

@Controller
public class ViewController {
    @GetMapping("/")
    public String index(Model model)
    {
        return "redirect:Login";
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
    public String ViewDashboard(Model model, Principal principal)
    {
        String userName = principal.getName();

        model.addAttribute("userName", new Gson().toJson(userName));

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
    public String ViewMenuCurrency(){return "currency_menu";}
    @GetMapping("/InputTransaksi")
    public String ViewMenuInputTransaksi(){return "input_transaksi";}
    @GetMapping("/InputTransaksidouble")
    public String ViewMenuInputTransaksidouble(){return "input_transaksidouble";}
    @GetMapping("/ledger")
    public String ViewMenuLedger(){return "ledger";}
    @GetMapping("/recapledger")
    public String ViewMenurecapLedger(){return "recapledger";}
    @GetMapping("/neraca_old")
    public String ViewMenuNeracaOld(){return "neraca_old";}
    @GetMapping("/neraca")
    public String ViewMenuNeraca(){return "neraca";}
    @GetMapping("/cflow")
    public String ViewMenuCashflow(){return "cashflow";}
    @GetMapping("/profitloss")
    public String ViewMenuprofloss(){return "profitloss";}
    @GetMapping("/register")
    public String ViewMenuRegister(){return "newuser";}
    @GetMapping("/audittrails")
    public String ViewMenuAuditTrails(){return "audittrails";}
    @GetMapping("/403")
    public String accessDenied(Model model, Principal principal) {

        if (principal != null) {
            User loginedUser = (User) ((Authentication) principal).getPrincipal();

            String userInfo = WebUtils.toString(loginedUser);

            model.addAttribute("userInfo", userInfo);

            String message = "Hi " + principal.getName() //
                    + "<br> You do not have permission to access this page!";
            model.addAttribute("message", message);

        }

        return "403Page";
    }






}
