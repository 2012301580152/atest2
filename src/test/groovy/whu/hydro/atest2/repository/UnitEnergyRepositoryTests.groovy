package whu.hydro.atest2.repository;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc
import whu.hydro.atest2.entity.UnitEnergy;

/**
 * @ClassName UnitEnergyRepositoryTests
 * @Description TODO
 * @Author 86187
 * @Date 2018/12/11 16:05
 * @Version 1.0
 */

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class UnitEnergyRepositoryTests {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private UnitEnergyRepository unitEnergyRepository;

    @Test
    void test() {
        UnitEnergy unitEnergy = new UnitEnergy()
        unitEnergy.equip = "test塔起重"
        unitEnergy.type = "test62t"
        unitEnergy.unitO = 100
        unitEnergy.unitE = 100

        // save方法测试
        unitEnergyRepository.save(unitEnergy)

        // 查询方法测试
        def unitEnergy1 = unitEnergyRepository.findByEquipAndType(unitEnergy.equip, unitEnergy.type)
        println(unitEnergy1)

        // 更新方法测试
        def test1 = unitEnergyRepository.update(unitEnergy.equip, unitEnergy.type, unitEnergy.unitE, unitEnergy.unitO)

        // 删除方法测试
        def test2 = unitEnergyRepository.deleteByEquipAndType(unitEnergy.equip,unitEnergy.type)

    }




}
