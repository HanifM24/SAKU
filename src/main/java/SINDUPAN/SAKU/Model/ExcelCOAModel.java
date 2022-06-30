package SINDUPAN.SAKU.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;


public class ExcelCOAModel {

    public String CODE_GL;

    public String NAME_OF_GL;

    public String POSISI;

    public String GROUP_COA;

    public String KETERANGAN;

//    public String DETAIL;



    public String getCODE_GL() {
        return CODE_GL;
    }

    public String getNAME_OF_GL() {
        return NAME_OF_GL;
    }

    public String getPOSISI() {
        return POSISI;
    }

    public String getGROUP_COA() {
        return GROUP_COA;
    }

    public String getKETERANGAN() {
        return KETERANGAN;
    }

//    public String getDETAIL() {
//        return DETAIL;
//    }

}
