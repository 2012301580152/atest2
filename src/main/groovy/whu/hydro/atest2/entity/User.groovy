package whu.hydro.atest2.entity

import com.sun.org.apache.xpath.internal.operations.Bool

import javax.persistence.CascadeType
import javax.persistence.Entity
import javax.persistence.FetchType
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.ManyToMany
import javax.persistence.Table

/**
 * Created by GuoJiong
 * Date 2018/9/10
 * Description:
 */
@Entity
@Table
class User {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    Long id
    String username
    String nickname

    String password

    String telephone

    String email

    String sex

    String imgPath

    String note

    String role

    Boolean checked
    Boolean enabled

    Date createTime

//    @ManyToMany(cascade = CascadeType.REFRESH, fetch = FetchType.EAGER)
//    List<Role> roles;

    User() {
    }

    User(String username, String password) {
        this.username = username
        this.password = password
    }
}
