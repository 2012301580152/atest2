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
class GuanjiangDingeGujie {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    Long id;

    //类型
    String type
    //
    // 透水率
    String toushuilv

    // 设备1
    String equip1
    // 设备1台时
    Double equip1Taishi

    // 设备2
    String equip2
    // 设备2台时
    Double equip2Taishi

    // 设备3
    String equip3
    // 设备3台时
    Double equip3Taishi

}
