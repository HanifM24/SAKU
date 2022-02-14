package SINDUPAN.SAKU.Model;

import java.util.Date;

public class GetListTransaksiModel {
    public String NO_TRX;
    public String NO_COA;
    public String NAMA_COA;
    public String INVOICE_DBT;
    public String INVOICE_KDT;
    public String IS_VALAS;
    public Double DBT_NOMINAL_RP;
    public Double KDT_NOMINAL_RP;
    public Double DBT_NOMINAL_VALAS;
    public Double KDT_NOMINAL_VALAS;
    public Double KURS_SAAT_TRANSAKSI;
    public String MATA_UANG;
    public int JUMLAH_TRANSAKSI;
    public Date TGL_TRX;
    public Date BACK_DATE;
    public String INPUT_BY;
    public String INPUT_DATE;
    public String CHECKED_BY;
    public Date CHECKED_DATE;
    public String APPROVED_BY;
    public Date APPROVED_DATE;
    public String IS_CHECKED;
    public String IS_APPROVED;
    public String UPDATE_BY;
    public Date UPDATE_DATE;
    public String TRX_DESCRIPTION;
    public String flag_updated;
    public String DESCRIPTION_FOR_UPDATED;

    public String getMATA_UANG() {
        return MATA_UANG;
    }

    public String getNAMA_COA() {
        return NAMA_COA;
    }

    public String getNO_COA() {
        return NO_COA;
    }

    public void setNAMA_COA(String NAMA_COA) {
        this.NAMA_COA = NAMA_COA;
    }

    public void setNO_COA(String NO_COA) {
        this.NO_COA = NO_COA;
    }

    public void setMATA_UANG(String MATA_UANG) {
        this.MATA_UANG = MATA_UANG;
    }

    public Date getBACK_DATE() {
        return BACK_DATE;
    }

    public Date getCHECKED_DATE() {
        return CHECKED_DATE;
    }

    public Date getTGL_TRX() {
        return TGL_TRX;
    }

    public String getCHECKED_BY() {
        return CHECKED_BY;
    }

    public String getINPUT_BY() {
        return INPUT_BY;
    }

    public Date getAPPROVED_DATE() {
        return APPROVED_DATE;
    }

    public String getAPPROVED_BY() {
        return APPROVED_BY;
    }

    public String getINPUT_DATE() {
        return INPUT_DATE;
    }

    public Double getDBT_NOMINAL_VALAS() {
        return DBT_NOMINAL_VALAS;
    }

    public Double getDBT_NOMINAL_RP() {
        return DBT_NOMINAL_RP;
    }

    public String getINVOICE_DBT() {
        return INVOICE_DBT;
    }

    public void setINVOICE_DBT(String INVOICE_DBT) {
        this.INVOICE_DBT = INVOICE_DBT;
    }

    public String getINVOICE_KDT() {
        return INVOICE_KDT;
    }

    public Double getKDT_NOMINAL_RP() {
        return KDT_NOMINAL_RP;
    }

    public void setDBT_NOMINAL_RP(Double DBT_NOMINAL_RP) {
        this.DBT_NOMINAL_RP = DBT_NOMINAL_RP;
    }

    public void setINVOICE_KDT(String INVOICE_KDT) {
        this.INVOICE_KDT = INVOICE_KDT;
    }

    public void setKDT_NOMINAL_RP(Double KDT_NOMINAL_RP) {
        this.KDT_NOMINAL_RP = KDT_NOMINAL_RP;
    }

    public String getIS_VALAS() {
        return IS_VALAS;
    }

    public int getJUMLAH_TRANSAKSI() {
        return JUMLAH_TRANSAKSI;
    }

    public Double getKURS_SAAT_TRANSAKSI() {
        return KURS_SAAT_TRANSAKSI;
    }

    public String getNO_TRX() {
        return NO_TRX;
    }


    public Double getKDT_NOMINAL_VALAS() {
        return KDT_NOMINAL_VALAS;
    }

    public String getIS_CHECKED() {
        return IS_CHECKED;
    }

    public String getIS_APPROVED() {
        return IS_APPROVED;
    }

    public void setAPPROVED_BY(String APPROVED_BY) {
        this.APPROVED_BY = APPROVED_BY;
    }

    public void setBACK_DATE(Date BACK_DATE) {
        this.BACK_DATE = BACK_DATE;
    }

    public void setCHECKED_BY(String CHECKED_BY) {
        this.CHECKED_BY = CHECKED_BY;
    }

    public void setAPPROVED_DATE(Date APPROVED_DATE) {
        this.APPROVED_DATE = APPROVED_DATE;
    }

    public void setCHECKED_DATE(Date CHECKED_DATE) {
        this.CHECKED_DATE = CHECKED_DATE;
    }

    public String getUPDATE_BY() {
        return UPDATE_BY;
    }

    public void setINPUT_BY(String INPUT_BY) {
        this.INPUT_BY = INPUT_BY;
    }

    public String getTRX_DESCRIPTION() {
        return TRX_DESCRIPTION;
    }

    public String getDESCRIPTION_FOR_UPDATED() {
        return DESCRIPTION_FOR_UPDATED;
    }

    public String getFlag_updated() {
        return flag_updated;
    }

    public void setINPUT_DATE(String INPUT_DATE) {
        this.INPUT_DATE = INPUT_DATE;
    }

    public Date getUPDATE_DATE() {
        return UPDATE_DATE;
    }



    public void setIS_VALAS(String IS_VALAS) {
        this.IS_VALAS = IS_VALAS;
    }

    public void setJUMLAH_TRANSAKSI(int JUMLAH_TRANSAKSI) {
        this.JUMLAH_TRANSAKSI = JUMLAH_TRANSAKSI;
    }

    public void setKURS_SAAT_TRANSAKSI(Double KURS_SAAT_TRANSAKSI) {
        this.KURS_SAAT_TRANSAKSI = KURS_SAAT_TRANSAKSI;
    }

    public void setNO_TRX(String NO_TRX) {
        this.NO_TRX = NO_TRX;
    }


    public void setIS_APPROVED(String IS_APPROVED) {
        this.IS_APPROVED = IS_APPROVED;
    }

    public void setDBT_NOMINAL_VALAS(Double DBT_NOMINAL_VALAS) {

        this.DBT_NOMINAL_VALAS = DBT_NOMINAL_VALAS;
    }
    public void setKDT_NOMINAL_VALAS(Double KDT_NOMINAL_VALAS) {

        this.KDT_NOMINAL_VALAS = KDT_NOMINAL_VALAS;
    }

    public void setIS_CHECKED(String IS_CHECKED) {
        this.IS_CHECKED = IS_CHECKED;
    }

    public void setDESCRIPTION_FOR_UPDATED(String DESCRIPTION_FOR_UPDATED) {
        this.DESCRIPTION_FOR_UPDATED = DESCRIPTION_FOR_UPDATED;
    }

    public void setFlag_updated(String flag_updated) {
        this.flag_updated = flag_updated;
    }

    public void setTGL_TRX(Date TGL_TRX) {
        this.TGL_TRX = TGL_TRX;
    }

    public void setTRX_DESCRIPTION(String TRX_DESCRIPTION) {
        this.TRX_DESCRIPTION = TRX_DESCRIPTION;
    }

    public void setUPDATE_BY(String UPDATE_BY) {
        this.UPDATE_BY = UPDATE_BY;
    }

    public void setUPDATE_DATE(Date UPDATE_DATE) {
        this.UPDATE_DATE = UPDATE_DATE;
    }

}
