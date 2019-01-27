package whu.hydro.atest2.entity

import groovy.transform.EqualsAndHashCode
import org.hibernate.annotations.DynamicUpdate
import whu.hydro.atest2.entity.primaryKey.PrimaryKey

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.EnumType
import javax.persistence.Enumerated
import javax.persistence.Id
import javax.persistence.IdClass
import javax.persistence.Index
import javax.persistence.Table
import javax.persistence.Temporal
import javax.persistence.TemporalType


/**
 * @ClassName MyEntity* @Description TODO* @Author 86187* @Date 2018/12/17 14:27
 * @Version 1.0
 */
@Entity
@Table(indexes = [ // 定义数据库索引。
    // 唯一索引。
    @Index(name = "ux_user_login_name", columnList = "loginName", unique = true),

    // 非唯一索引。
    @Index(name = "idx_user_age", columnList = "age")
])
@IdClass(PrimaryKey.class)
class MyEntity {
    /**
     * @description 主键
     */
    @Id
    @Column(name = "id", nullable = false)
    Integer id


    /**
     * @description 主键
     */
    @Id
    @Column(name = "user_id", nullable = false)
    Integer userId

    /**
     * 用户的登录名。
     */
    @Column(length = 100, nullable = false)
    String loginName

    /**
     * 用户的年龄。
     */
    @Column(length = 3)
    Integer age

    /**
     * 用户的状态。
     */
//    @Column(length = 16, nullable = false)
//    @Enumerated(EnumType.STRING)
//    UserStatus status = UserStatus.enable;

    /**
     * 用户的注册时间。
     */
    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date registTime;


}
