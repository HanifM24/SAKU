package SINDUPAN.SAKU.Model;

public class GetListMataUangModel {
    public String Id;
    public String KET;
    public String KODE_ALFABET;
    public String KODEPLUSNAMAUANGDBT;
    public String KODEPLUSNAMAUANGKDT;

    public void setId(String id) {
        Id = id;
    }

    public void setKET(String KET) {
        this.KET = KET;
    }

    public void setKODE_ALFABET(String KODE_ALFABET) {
        this.KODE_ALFABET = KODE_ALFABET;
    }

    public String getKODEPLUSNAMAUANGDBT() {
        return KODEPLUSNAMAUANGDBT;
    }

    public void setKODEPLUSNAMAUANGDBT(String KODEPLUSNAMAUANGDBT) {
        this.KODEPLUSNAMAUANGDBT = KODEPLUSNAMAUANGDBT;
    }

    public String getKODEPLUSNAMAUANGKDT() {
        return KODEPLUSNAMAUANGKDT;
    }

    public void setKODEPLUSNAMAUANGKDT(String KODEPLUSNAMAUANGKDT) {
        this.KODEPLUSNAMAUANGKDT = KODEPLUSNAMAUANGKDT;
    }
}
