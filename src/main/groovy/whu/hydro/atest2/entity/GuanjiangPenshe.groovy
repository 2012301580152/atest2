package whu.hydro.atest2.entity

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id


/**
 * @ClassName GuanjiangPenshe* @Description TODO* @Author 86187* @Date 2018/12/14 11:33
 * @Version 1.0
 */
@Entity
class GuanjiangPenshe {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    Long id;

    // 地层类别
    String earthType
    // 灌浆方式
    String guanjiangMethod


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
    // 设备5型号
    String equip5Type
    // 设备5台时
    Double equip5Taishi

    // 设备6
    String equip6
    // 设备6型号
//    String equip6Type
    // 设备6台时
    Double equip6Taishi


    // 设备7
    String equip7
    // 设备7型号
//    String equip7Type
    // 设备7台时
    Double equip7Taishi

    // 设备8
    String equip8
    // 设备8型号
    String equip8Type
    // 设备4台时
    Double equip8Taishi


    // 设备9
    String equip9
    // 设备9型号
    String equip9Type
    // 设备9台时
    Double equip9Taishi

    // 设备10
    String equip10
    // 设备4型号
//    String equip10Type
    // 设备4台时
    Double equip10Taishi

}
