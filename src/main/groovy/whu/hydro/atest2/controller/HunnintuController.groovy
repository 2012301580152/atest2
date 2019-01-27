package whu.hydro.atest2.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import whu.hydro.atest2.repository.HunnintuDingeChangtaiRepository
import whu.hydro.atest2.repository.HunnintuDingeRCCRepository
import whu.hydro.atest2.repository.HunnintuFangshenqiangRepository
import whu.hydro.atest2.repository.HunnintuShengchanRepository
import whu.hydro.atest2.repository.HunnintuYunshuChuizhiRepository
import whu.hydro.atest2.repository.HunnintuYunshuShuipinRepository

/**
 * Created by GuoJiong
 * Date 2018/9/7
 * Description:
 */
@RestController
@RequestMapping("/hunnintu")
class HunnintuController {
    @Autowired
    HunnintuDingeChangtaiRepository hunnintuDingeChangtaiRepository

    @Autowired
    HunnintuDingeRCCRepository hunnintuDingeRCCRepository

    @Autowired
    HunnintuFangshenqiangRepository hunnintuFangshenqiangRepository

    @Autowired
    HunnintuShengchanRepository hunnintuShengchanRepository


    @Autowired
    HunnintuYunshuChuizhiRepository hunnintuYunshuChuizhiRepository

    @Autowired
    HunnintuYunshuShuipinRepository hunnintuYunshuShuipinRepository

    @RequestMapping("/dingechangtaiall")
    List findDingeChangtaiAll(){
        return hunnintuDingeChangtaiRepository.findAll()
    }

    @RequestMapping("/dingerccall")
    List findDingeRCCAll(){
        return  hunnintuDingeRCCRepository.findAll()
    }


    @RequestMapping("/fangshenqiangall")
    List findFangshenqiangAll(){
        return hunnintuFangshenqiangRepository.findAll()
    }

    @RequestMapping("/Shengchanall")
    List findShengchanAll(){
        return  hunnintuShengchanRepository.findAll()
    }



    @RequestMapping("/yunshuchuizhiall")
    List findYunshuChuizhiAll(){
        return hunnintuYunshuChuizhiRepository.findAll()
    }

    @RequestMapping("/yunshushuipinall")
    List findYunshuShuipinAll(){
        return hunnintuYunshuShuipinRepository.findAll()
    }
}
