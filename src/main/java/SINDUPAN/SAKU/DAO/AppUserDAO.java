package SINDUPAN.SAKU.DAO;

import SINDUPAN.SAKU.Mapper.AppUserMapper;
import SINDUPAN.SAKU.Model.AppUserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.sql.DataSource;

import static SINDUPAN.SAKU.EncrytedPasswordUtils.encrytePassword;
@Repository
@Transactional

public class AppUserDAO extends JdbcDaoSupport {
    @Autowired
    public AppUserDAO(DataSource dataSource) {
        this.setDataSource(dataSource);
    }

    public AppUserModel findUserAccount(String userName) {
        // Select .. from App_User u Where u.User_Name = ?
        String sql = AppUserMapper.BASE_SQL + " where u.User_Name = ? ";

        Object[] params = new Object[]{userName};
        AppUserMapper mapper = new AppUserMapper();
        try {
            AppUserModel userInfo = this.getJdbcTemplate().queryForObject(sql, params, mapper);
            return userInfo;
        } catch (EmptyResultDataAccessException e) {
            return null;
        }
    }

    public String addUserAccount(String userId, String userName, String Password, String role_Name)
    {
        if (findUserAccount(userName) != null) {

            return "1";
        } else {
            String sql = "insert into app_user (USER_ID, USER_NAME, ENCRYTED_PASSWORD, ENABLED)" +
                    "values(?, ?, ?, 1)";
            String sqlrole = "insert into user_role \n" +
                    "(USER_ID, ROLE_ID)\n" +
                    "select au.USER_ID, pp.ROLE_ID  from app_user au, app_role pp  \n" +
                    "where au.USER_NAME = ?\n" +
                    "and pp.ROLE_NAME = ?\n";
            String encrytedPassword = encrytePassword(Password);
            getJdbcTemplate().update(sql, userId, userName, encrytedPassword);
            getJdbcTemplate().update(sqlrole, userName, role_Name);
            return "0";
        }

    }
}
