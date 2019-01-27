package whu.hydro.atest2.entity

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

/**
 * Created by GuoJiong
 * Date 2018/9/7
 * Description:
 */
@Entity
class ZhuankongDingeGujie {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    Long id;

    //类型
    String fangfa
    //岩石类型
    String rockType

    // 设备1
    String equip1
    // 设备1台时
    Double equip1Taishi

}
