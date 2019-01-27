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
class HunnintuYunshuShuipin {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    Long id;

    //设备1	设备1型号

    // 设备1
    String equip1

    // 设备1型号
    String equip1Type
    // 设备1台时
    Double equip1Taishi


    //运距
    String yunju
    // 洞内/外
    String neiwai    //内：true  外：false
    // 增加0.5km运距
    Double in05yunju

}
