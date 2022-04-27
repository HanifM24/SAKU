package SINDUPAN.SAKU.Model;

import org.springframework.security.core.parameters.P;

import java.sql.Date;
import java.sql.Time;

public class GetListCOAModel {
    public String NO_COA;
    public String NAMA_COA;
    public String POSISI;
    public String TANGGAL;
    public String MATA_UANG;
    public String GROUP_COA;
    public String CREATED_BY;
    public Date CREATED_DATE;
    public Time CREATED_TIME;
    public String UPDATED_BY;
    public Date UPDATED_DATE;
    public Time UPDATED_TIME;
    public String KET;
    public String DESC;
    public int STATUS;
    public String NOPLUSNAMACOADBT;
    public String NOPLUSNAMACOAKDT;

    public String getDESC() {
        return DESC;
    }

    public void setGROUP_COA(String GROUP_COA) {
        this.GROUP_COA = GROUP_COA;
    }

    public String getGROUP_COA() {
        return GROUP_COA;
    }

    public void setDESC(String DESC) {
        this.DESC = DESC;
    }

    public void setNO_COA(String NO_COA) {
        this.NO_COA = NO_COA;
    }

    public String getNO_COA() {
        return NO_COA;
    }

    public void setNAMA_COA(String NAMA_COA) {
        this.NAMA_COA = NAMA_COA;
    }

    public String getNAMA_COA() {
        return NAMA_COA;
    }

    public void setTANGGAL(String TANGGAL) {
        this.TANGGAL = TANGGAL;
    }

    public String getTANGGAL() {
        return TANGGAL;
    }

    public void setPOSISI(String POSISI) {
        this.POSISI = POSISI;
    }

    public String getPOSISI() {
        return POSISI;
    }

    public void setMATA_UANG(String MATA_UANG) {
        this.MATA_UANG = MATA_UANG;
    }

    public String getMATA_UANG() {
        return MATA_UANG;
    }

    public void setKET(String KET) {
        this.KET = KET;
    }

    public String getKET() {
        return KET;
    }

    public void setSTATUS(int STATUS) {
        this.STATUS = STATUS;
    }

    public int getSTATUS() {
        return STATUS;
    }

    public String getNOPLUSNAMACOADBT() {
        return NOPLUSNAMACOADBT;
    }


    public String getNOPLUSNAMACOAKDT() {
        return NOPLUSNAMACOAKDT;
    }

    public void setNOPLUSNAMACOADBT(String NOPLUSNAMACOADBT) {
        this.NOPLUSNAMACOADBT = NOPLUSNAMACOADBT;
    }

    public void setNOPLUSNAMACOAKDT(String NOPLUSNAMACOAKDT) {
        this.NOPLUSNAMACOAKDT = NOPLUSNAMACOAKDT;
    }

    public String getCREATED_BY() {
        return CREATED_BY;
    }

    public Date getCREATED_DATE() {
        return CREATED_DATE;
    }

    public Time getCREATED_TIME() {
        return CREATED_TIME;
    }

    public String getUPDATED_BY() {
        return UPDATED_BY;
    }

    public Date getUPDATED_DATE() {
        return UPDATED_DATE;
    }

    public Time getUPDATED_TIME() {
        return UPDATED_TIME;
    }

    public void setCREATED_BY(String CREATED_BY) {
        this.CREATED_BY = CREATED_BY;
    }

    public void setCREATED_DATE(Date CREATED_DATE) {
        this.CREATED_DATE = CREATED_DATE;
    }

    public void setCREATED_TIME(Time CREATED_TIME) {
        this.CREATED_TIME = CREATED_TIME;
    }

    public void setUPDATED_BY(String UPDATED_BY) {
        this.UPDATED_BY = UPDATED_BY;
    }

    public void setUPDATED_DATE(Date UPDATED_DATE) {
        this.UPDATED_DATE = UPDATED_DATE;
    }

    public void setUPDATED_TIME(Time UPDATED_TIME) {
        this.UPDATED_TIME = UPDATED_TIME;
    }
}
