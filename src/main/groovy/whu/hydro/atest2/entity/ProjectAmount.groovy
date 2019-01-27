package whu.hydro.atest2.entity

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

/**
 * Created by GuoJiong
 * Date 2018/9/8
 * Description:
 */
@Entity
class ProjectAmount {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    Long id;
    //工程名称
    String projectName
    // 工程部位
    String projectPart
    // 工程量分类
    String projectType
    // 工程量
    Double Amount
    // 备注
    String remark
    //工程类型
    Integer type

}

