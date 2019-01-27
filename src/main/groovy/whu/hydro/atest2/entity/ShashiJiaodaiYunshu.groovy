package whu.hydro.atest2.entity

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id


/**
 * @ClassName ShashiJiaodaiYunshu* @Description TODO* @Author 86187* @Date 2018/12/14 11:40
 * @Version 1.0
 */
@Entity
class ShashiJiaodaiYunshu {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    Long id;
    //骨料分类	胶带宽度
    String GuliaoType
    String JiaodaiWidth

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
    // 设备4
    String equip4

    // 设备4台时
    Double equip4Taishi
}
