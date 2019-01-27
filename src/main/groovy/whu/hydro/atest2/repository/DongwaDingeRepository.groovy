package whu.hydro.atest2.repository

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.JpaSpecificationExecutor
import org.springframework.data.repository.CrudRepository
import whu.hydro.atest2.entity.DongwaDinge

/**
 * Created by GuoJiong
 * Date 2018/9/7
 * Description:
 */
interface DongwaDingeRepository extends JpaRepository<DongwaDinge, Long> {
    //List<DongwaDinge> findAll();
    //List<DongwaDinge> findByRackType();
}


