package whu.hydro.atest2.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import whu.hydro.atest2.entity.DongwaDinge
import whu.hydro.atest2.entity.DongwaZhuangyun
import whu.hydro.atest2.repository.DongwaDingeRepository
import whu.hydro.atest2.repository.DongwaZhuangyunRepository

/**
 * Created by GuoJiong
 * Date 2018/9/7
 * Description:
 */

@RestController
@RequestMapping("/dongwa")
class DongwaController {

    @Autowired
    private DongwaDingeRepository dingeRepository

    @Autowired
    private DongwaZhuangyunRepository dongwaZhuangyunRepository

    @RequestMapping("/test")
    public String test(){
        return "hello"
    }

    @RequestMapping("/dingeall")
    public List getDingeAll(){
        List<DongwaDinge> list = dingeRepository.findAll()
        return list
    }

    @RequestMapping("/zhuangyunall")
    public List getZhuangyunAll(){
        List<DongwaZhuangyun> list = dongwaZhuangyunRepository.findAll()
        //Map<String>
        list.groupBy {
            it.equip1
        }


        return list
    }
}
