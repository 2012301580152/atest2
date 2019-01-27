package whu.hydro.atest2.repository

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Modifying
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import whu.hydro.atest2.entity.UnitEnergy

import javax.transaction.Transactional

/**
 * Created by GuoJiong
 * Date 2018/9/9
 * Description:
 */
interface UnitEnergyRepository extends JpaRepository<UnitEnergy, Long> {
    UnitEnergy findByEquipAndType(String equip, String type);

    //运行成功返回1
    @Transactional
    int deleteByEquipAndType(String equip, String type)

    //运行成功返回1
    @Transactional
    @Modifying
    @Query(value = "UPDATE unit_energy SET unite = ?3, unito = ?4 WHERE equip = ?1 and type = ?2", nativeQuery = true)
    int update(@Param ("equip") String equip,
               @Param ("type")String type,
               @Param ("unite")Double unite,
               @Param ("unito")Double unito)
}