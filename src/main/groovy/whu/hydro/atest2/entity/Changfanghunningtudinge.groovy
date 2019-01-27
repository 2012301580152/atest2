package whu.hydro.atest2.entity

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id


/**
 * @ClassName changfanghunningtudinge* @Description TODO* @Author 86187* @Date 2018/12/14 11:21
 * @Version 1.0
 */
@Entity
class Changfanghunningtudinge {


    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    Long id;

    //施工部位
    String shigongbuwei
    // 上部/下部
    String buwei
    // 设备1
    String equip1
    // 设备1型号
    String equip1Type
    // 设备1台时
    Double equip1Taishi
    // 设备2
    String equip2

    // 设备2台时
    Double equip2Taishi


}
