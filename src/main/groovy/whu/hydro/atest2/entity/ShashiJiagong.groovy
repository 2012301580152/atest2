package whu.hydro.atest2.entity

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id


/**
 * @ClassName ShashiJiagong* @Description TODO* @Author 86187* @Date 2018/12/14 11:43
 * @Version 1.0
 */
@Entity
class ShashiJiagong {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    Long id;

    //处理能力
    String chuliNengli
    // 设备1
    String equip1
    // 设备1单位工程量能耗
    Double equip1Energy

    // 设备2
    String equip2
    // 设备2单位工程量能耗
    Double equip2Energy

}
