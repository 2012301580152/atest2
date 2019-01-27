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
class HunnintuDingeRCC {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    Long id;

    //仓面面积
    String Area

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
    // 设备3型号
    String equip3Type
    // 设备3台时
    Double equip3Taishi


    // 设备4
    String equip4
    // 设备4型号
    String equip4Type
    // 设备4台时
    Double equip4Taishi

    // 设备5
    String equip5
    // 设备3型号
    String equip5Type
    // 设备5台时
    Double equip5Taishi


    // 设备6
    String equip6
    // 设备6型号
    String equip6Type
    // 设备6台时
    Double equip6Taishi

    // 设备7
    String equip7
    // 设备7型号
    String equip7Type
    // 设备7台时
    Double equip7Taishi

    // 设备8
    String equip8
    // 设备8型号
    String equip8Type
    // 设备8台时
    Double equip8Taishi


    // 设备9
    String equip9
    // 设备9型号
    String equip9Type
    // 设备9台时
    Double equip9Taishi


}
