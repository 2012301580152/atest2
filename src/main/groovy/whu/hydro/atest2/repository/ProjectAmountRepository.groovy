package whu.hydro.atest2.repository

import org.springframework.data.jpa.repository.JpaRepository
import whu.hydro.atest2.entity.ProjectAmount


/**
 * Created by GuoJiong
 * Date 2018/9/8
 * Description:
 */
interface ProjectAmountRepository extends JpaRepository<ProjectAmount, Long>{

}
