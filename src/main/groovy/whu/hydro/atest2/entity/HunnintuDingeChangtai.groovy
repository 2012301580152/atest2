package whu.hydro.atest2.entity

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id;

/**
 * Created by GuoJiong
 * Date 2018/9/7
 * Description:
 */
@Entity
class HunnintuDingeChangtai {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    Long id;

    //浇筑层厚
    String houdu
    // 作业方式
    String fangfa

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



}
