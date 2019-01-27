package whu.hydro.atest2.entity

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id


/**
 * @ClassName HunnintuShengchan* @Description TODO* @Author 86187* @Date 2018/12/14 11:30
 * @Version 1.0
 */
@Entity
class HunnintuShengchan {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    Long id;

    String equipName
    String equipType

    String area
    Double taishi
}
