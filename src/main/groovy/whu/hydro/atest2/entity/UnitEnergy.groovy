package whu.hydro.atest2.entity

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

/**
 * Created by GuoJiong
 * Date 2018/9/9
 * Description:
 */
@Entity
class UnitEnergy {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    Long id;

    //设备
    String equip
    // 型号
    String type
    // 台时耗电
    Double unitE
    // 台时耗油
    Double unitO

    UnitEnergy() {
    }

    UnitEnergy(String equip, String type) {
        this.equip = equip
        this.type = type
    }
}
