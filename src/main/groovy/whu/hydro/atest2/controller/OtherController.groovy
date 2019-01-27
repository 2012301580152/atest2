package whu.hydro.atest2.controller

import org.springframework.beans.BeanUtils
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import whu.hydro.atest2.common.Result
import whu.hydro.atest2.common.ResultEnum
import whu.hydro.atest2.entity.UnitEnergy
import whu.hydro.atest2.repository.ProjectAmountRepository
import whu.hydro.atest2.repository.UnitEnergyRepository

/**
 * Created by GuoJiong
 * Date 2018/9/7
 * Description:
 */

@RestController
@RequestMapping("/other")
class OtherController {

    @Autowired
    ProjectAmountRepository projectAmountRepository

    @Autowired
    UnitEnergyRepository unitEnergyRepository

    @RequestMapping("/projectamount")

    List findProjectAmountAll(){

        List list = projectAmountRepository.findAll()

        list.removeAll{ it.Amount<0.1}



        return list
    }

    private def getUnitEnergyByEquipAndType(String equip, String type){

        UnitEnergy unitEnergy = unitEnergyRepository.findByEquipAndType(equip.trim(), type.trim())
        return unitEnergy
    }

    @RequestMapping(value = "/unitenergy",method = RequestMethod.GET)
    def findUnitEnergyByEquipAndType(@RequestParam String equip,
                                      @RequestParam String type){

        return getUnitEnergyByEquipAndType(equip, type)
    }

    /*
        SELECT
            a.equip,
            a.type,
            a.unite,
            a.unito
        FROM unit_energy a
        RIGHT JOIN (
            SELECT *
            FROM(
                SELECT
                    COUNT(type) count,
                    equip,
                    type
                FROM unit_energy
                GROUP BY equip, type
            ) a
            WHERE a.count = 2
        ) b
        on
            a.equip = b.equip and
            a.type = b.type

        ORDER BY equip, type
     */

    @RequestMapping(value = "/unitenergy",method = RequestMethod.POST)
    def saveUnitEnergy(@RequestBody UnitEnergy unitEnergy){
        def temp = unitEnergyRepository.findByEquipAndType(unitEnergy.equip, unitEnergy.type)
        if(temp!=null){
            return "数据已存在，是否需要更新数据"
        }else {
            return unitEnergyRepository.save(unitEnergy)
        }

        return "本条语句不会被执行"
    }

    @RequestMapping(value = "/unitenergy",method = RequestMethod.PUT)
    def updateOrSaveUnitEnergy(@RequestBody UnitEnergy unitEnergy){


        UnitEnergy unitEnergy1 = getUnitEnergyByEquipAndType(unitEnergy.equip, unitEnergy.type)

        if(unitEnergy!=null) {
            unitEnergyRepository.update(unitEnergy.equip, unitEnergy.type, unitEnergy.unitE, unitEnergy.unitO)
        }else{
            unitEnergyRepository.save(unitEnergy)
        }

    }

    @RequestMapping(value = "/unitenergy",method = RequestMethod.DELETE)
    def deleteUnitEnergy(@RequestBody UnitEnergy unitEnergy){



        return unitEnergyRepository.delete(unitEnergy)
    }


    @RequestMapping("/hello")
    String hello(){
        return "hello"
    }



}
