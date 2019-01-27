package whu.hydro.atest2.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import whu.hydro.atest2.entity.ChangfanghunningtuCheqi
import whu.hydro.atest2.entity.Changfanghunningtudinge
import whu.hydro.atest2.entity.Changfanghunningtudingezhuangyun
import whu.hydro.atest2.entity.ChenqiDingeMingqu
import whu.hydro.atest2.repository.ChangfanghunningtuCheqiRepository
import whu.hydro.atest2.repository.ChangfanghunningtudingeRepository
import whu.hydro.atest2.repository.ChangfanghunningtudingezhuangyunRepository
import whu.hydro.atest2.repository.ChenqiDingeMingquRepository
import whu.hydro.atest2.repository.ChenqiDingeSuidongRepository

/**
 * Created by GuoJiong
 * Date 2018/9/7
 * Description:
 */

@RestController
@RequestMapping("/cheqi")
class ChenqiController {
    @Autowired
    ChenqiDingeMingquRepository chenqiDingeMingquRepository

    @Autowired
    ChenqiDingeSuidongRepository chenqiDingeSuidongRepository

    @Autowired
    ChangfanghunningtudingeRepository changfanghunningtudingeRepository

    @Autowired
    ChangfanghunningtudingezhuangyunRepository changfanghunningtudingezhuangyunRepository

    @Autowired
    ChangfanghunningtuCheqiRepository changfanghunningtuCheqiRepository




    @RequestMapping("/mingquall")
    List findMingquAll(){
        List<ChenqiDingeMingqu> list = chenqiDingeMingquRepository.findAll()
        return list
    }

    @RequestMapping("/suidongall")
    List findSuidongAll(){
        return chenqiDingeSuidongRepository.findAll()
    }

    @RequestMapping("/hunningtuall")
    List findHunningtuAll(){
        List<Changfanghunningtudinge> list = changfanghunningtudingeRepository.findAll()
        return list
    }

//    ChangfanghunningtuCheqiRepository
    // changfanghunningtuCheqiRepository

    @RequestMapping("/hunningtuCheqiall")
    List findHunningtuCheqiAll(){
        List<ChangfanghunningtuCheqi> list = changfanghunningtuCheqiRepository.findAll()
        return list
    }

    @RequestMapping("/hunningtuzyall")
    List findHunningtuZyAll(){
        List<Changfanghunningtudingezhuangyun> list = changfanghunningtudingeRepository.findAll()
        return list
    }
}
