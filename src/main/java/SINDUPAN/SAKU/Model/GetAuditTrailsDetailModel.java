package SINDUPAN.SAKU.Model;

import java.sql.Date;
import java.sql.Time;

public class GetAuditTrailsDetailModel {
    public String DESKRIPSI;
    public String Tanggal;
    public String Jam;

    public String getDESKRIPSI() {
        return DESKRIPSI;
    }

    public String getJam() {
        return Jam;
    }

    public String getTanggal() {
        return Tanggal;
    }

    public void setDESKRIPSI(String DESKRIPSI) {
        this.DESKRIPSI = DESKRIPSI;
    }

    public void setJam(String jam) {
        Jam = jam;
    }

    public void setTanggal(String tanggal) {
        Tanggal = tanggal;
    }
}
