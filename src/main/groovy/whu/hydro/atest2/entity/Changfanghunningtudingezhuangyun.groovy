package whu.hydro.atest2.entity

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id


/**
 * @ClassName changfanghunningtudingezhuangyun* @Description TODO* @Author 86187* @Date 2018/12/14 11:22
 * @Version 1.0
 */
@Entity
@Deprecated
class Changfanghunningtudingezhuangyun {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    Long id;

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

    // 设备2
    String equip3
    // 设备2型号
    String equip3Type
    // 设备2台时
    String yunju
    Double equip3Taishi
    Double in1km_yunju
}
