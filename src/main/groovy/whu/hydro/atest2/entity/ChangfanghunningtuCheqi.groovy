package whu.hydro.atest2.entity

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id


/**
 * @ClassName ChangfanghunningtuCheqi* @Description TODO* @Author 86187* @Date 2018/12/17 10:36
 * @Version 1.0
 */
@Entity
class ChangfanghunningtuCheqi {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    Long id;

    // 厂房宽度
    String kuandu
    // 衬砌厚度
    String houdu

    // 设备1
    String equip1
    // 设备1型号
    String equip1Type
    // 设备1台时
    Double equip1Taishi

    // 设备2
    String equip2
    // 设备2型号
    String equip2Type
    // 设备2台时
    Double equip2Taishi


    // 设备3
    String equip3

    // 设备3台时
    Double equip3Taishi
}
