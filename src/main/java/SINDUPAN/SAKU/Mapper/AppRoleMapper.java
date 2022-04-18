package SINDUPAN.SAKU.Mapper;


import SINDUPAN.SAKU.Model.AppRoleModel;
import SINDUPAN.SAKU.Model.GetListCOAModel;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;


public class AppRoleMapper implements RowMapper<AppRoleModel> {


    @Override
    public AppRoleModel mapRow(ResultSet rs, int rowNum) throws SQLException
    {
        AppRoleModel appRoleModel = new AppRoleModel();
        appRoleModel.setRole_Name(rs.getString("Role_Name"));
        return appRoleModel;    }

}
