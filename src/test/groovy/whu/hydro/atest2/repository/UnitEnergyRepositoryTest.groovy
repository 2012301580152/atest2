//package whu.hydro.atest2.repository
//
//import org.junit.Test
//import org.junit.runner.RunWith
//import org.springframework.beans.factory.annotation.Autowired
//import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
//import org.springframework.boot.test.context.SpringBootTest
//import org.springframework.test.context.junit4.SpringRunner
//import whu.hydro.atest2.entity.UnitEnergy
//
//
///**
// * Created by GuoJiong
// * Date 2018/9/9
// * Description:
// */
//
//@RunWith(SpringRunner.class)
//@DataJpaTest
//@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
//class UnitEnergyRepositoryTest {
//
//    @Autowired
//    UnitEnergyRepository unitEnergyRepository
//
//
//
//    @Test
//    void test1(){
//        UnitEnergy unitEnergy = unitEnergyRepository.findByEquipAndType("as", "bdj")
//        if(unitEnergy==null){
//            unitEnergy = new UnitEnergy("as", "bdj")
//            unitEnergy.UnitE = 20
//            unitEnergy.UnitO = 15
//            //unitEnergy.id = 1002
//        }
//        //unitEnergyRepository.saveAndFlush(unitEnergy)
//        unitEnergyRepository.save(unitEnergy)
//        println(unitEnergy)
//    }
//
//    @Test
//    void testDelete(){
//        unitEnergyRepository.deleteByEquipAndType("as", "bdj")
//    }
//}
