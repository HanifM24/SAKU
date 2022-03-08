package SINDUPAN.SAKU.Model;

import java.sql.Date;
import java.sql.Time;

public class GetDetailCurrencyModel {
    public String KD_MATA_UANG;
    public String NAMA_MATA_UANG;
    public Double RATE;
    public Date UPDATE_DATE;
    public Time UPDATE_TIME;
    public String UPDATE_BY;

    public void setUPDATE_DATE(Date UPDATE_DATE) {
        this.UPDATE_DATE = UPDATE_DATE;
    }

    public String getNAMA_MATA_UANG() {
        return NAMA_MATA_UANG;
    }

    public void setNAMA_MATA_UANG(String NAMA_MATA_UANG) {
        this.NAMA_MATA_UANG = NAMA_MATA_UANG;
    }

    public void setUPDATE_BY(String UPDATE_BY) {
        this.UPDATE_BY = UPDATE_BY;
    }

    public String getUPDATE_BY() {
        return UPDATE_BY;
    }

    public Date getUPDATE_DATE() {
        return UPDATE_DATE;
    }

    public Double getRATE() {
        return RATE;
    }

    public String getKD_MATA_UANG() {
        return KD_MATA_UANG;
    }

    public Time getUPDATE_TIME() {
        return UPDATE_TIME;
    }

    public void setKD_MATA_UANG(String KD_MATA_UANG) {
        this.KD_MATA_UANG = KD_MATA_UANG;
    }

    public void setRATE(Double RATE) {
        this.RATE = RATE;
    }

    public void setUPDATE_TIME(Time UPDATE_TIME) {
        this.UPDATE_TIME = UPDATE_TIME;
    }

}
