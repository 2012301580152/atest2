package whu.hydro.atest2.repository

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Modifying
import org.springframework.data.jpa.repository.Query
import whu.hydro.atest2.entity.ProjectAmount

import javax.transaction.Transactional


/**
 * Created by GuoJiong
 * Date 2018/9/8
 * Description:
 */
interface ProjectAmountRepository extends JpaRepository<ProjectAmount, Long>{



//    @Modifying
//    @Transactional
//    @Query("DELETE FROM project_amount pa WHERE pa.project_name = ?1")
//    public void deleteByProject_name(String name);


//    @Modifying
//    @Transactional
//    @Query("DELETE FROM project_amount pa WHERE pa.project_name = ?1")
//    public void deleteByIds(String name);
}
