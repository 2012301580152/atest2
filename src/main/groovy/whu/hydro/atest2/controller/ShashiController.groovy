package whu.hydro.atest2.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import whu.hydro.atest2.entity.DongwaDinge
import whu.hydro.atest2.entity.ShashiJiagong
import whu.hydro.atest2.entity.ShashiJiaodaiYunshu
import whu.hydro.atest2.entity.ShashiKaicai
import whu.hydro.atest2.repository.ShashiJiagongRepository
import whu.hydro.atest2.repository.ShashiJiaodaiYunshuRepository
import whu.hydro.atest2.repository.ShashiKaicaiRepository


/**
 * @ClassName ShashiController* @Description TODO* @Author 86187* @Date 2018/12/15 15:17
 * @Version 1.0
 */
@RestController
@RequestMapping("/shashi")
class ShashiController {


    @Autowired
    ShashiJiagongRepository shashiJiagongRepository

    @Autowired
    ShashiJiaodaiYunshuRepository shashiJiaodaiYunshuRepository

    @Autowired
    ShashiKaicaiRepository shashiKaicaiRepository

    @RequestMapping("/jiagongall")
    public List getJiagongAll(){
        List<ShashiJiagong> list = shashiJiagongRepository.findAll()
        return list
    }

    @RequestMapping("/jiaodaiall")
    public List getJiaodaiAll(){
        List<ShashiJiaodaiYunshu> list = shashiJiaodaiYunshuRepository.findAll()
        return list
    }

    @RequestMapping("/kaicaiall")
    public List getKaicaiAll(){
        List<ShashiKaicai> list = shashiKaicaiRepository.findAll()
        return list
    }
}
