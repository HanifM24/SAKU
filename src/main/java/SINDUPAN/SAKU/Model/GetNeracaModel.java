package SINDUPAN.SAKU.Model;

import java.util.Date;

public class GetNeracaModel {
    public String NOCOA;
    public String NAMACOA;
    public Double DEBIT;
    public Double KREDIT;
    public Double SALDO;
    public String GROUP_COA;
    public String HEADER_COA;



    public Double getDEBIT() {
        return DEBIT;
    }

    public Double getKREDIT() {
        return KREDIT;
    }

    public String getNAMACOA() {
        return NAMACOA;
    }

    public String getNOCOA() {
        return NOCOA;
    }

    public void setDEBIT(Double DEBIT) {
        this.DEBIT = DEBIT;
    }

    public void setNOCOA(String NOCOA) {
        this.NOCOA = NOCOA;
    }

    public void setNAMACOA(String NAMACOA) {
        this.NAMACOA = NAMACOA;
    }

    public void setKREDIT(Double KREDIT) {
        this.KREDIT = KREDIT;
    }

    public Double getSALDO() {
        return SALDO;
    }

    public String getGROUP_COA() {
        return GROUP_COA;
    }

    public void setGROUP_COA(String GROUP_COA) {
        this.GROUP_COA = GROUP_COA;
    }

    public void setSALDO(Double SALDO) {
        this.SALDO = SALDO;
    }

    public String getHEADER_COA() {
        return HEADER_COA;
    }

    public void setHEADER_COA(String HEADER_COA) {
        this.HEADER_COA = HEADER_COA;
    }
}
