package whu.hydro.atest2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import whu.hydro.atest2.entity.MingwaDingeShifang;
import whu.hydro.atest2.entity.MingwaDingeTufang;
import whu.hydro.atest2.repository.MingwaDingeShifangRepository;
import whu.hydro.atest2.repository.MingwaDingeTufangRepository;
import whu.hydro.atest2.repository.MingwaDingeZhuangyunRepository;

import java.util.List;
import java.util.Optional;

/**
 * Created by GuoJiong
 * Date 2018/9/8
 * Description:
 */
@RestController
@RequestMapping("/mingwa")
public class MingwaController {
    @Autowired
    private MingwaDingeShifangRepository mingwaDingeShifangRepository;

    @Autowired
    private MingwaDingeTufangRepository mingwaDingeTufangRepository;

    @Autowired
    private MingwaDingeZhuangyunRepository mingwaDingeZhuangyunRepository;

    @RequestMapping("/dingeshifangall")
    public List findDingeShifangAll(){
        return mingwaDingeShifangRepository.findAll();
    }

    @RequestMapping(value = "/dingeshifangbyid",method = RequestMethod.GET)
    public Optional findDingeShifangById(Long id){
        Optional<MingwaDingeShifang> temp=  mingwaDingeShifangRepository.findById(id);
        //MingwaDingeShifang temp=  mingwaDingeShifangRepository.findById(id);
        return  temp;
        //return temp.get();
    }

    @RequestMapping(value = "/dingeshifangbyid", method = RequestMethod.POST)
    public MingwaDingeShifang saveDingeShifangById(MingwaDingeShifang mingwaDingeShifang, Long id){
        mingwaDingeShifang.setId(id);
        return mingwaDingeShifangRepository.save(mingwaDingeShifang);
        //return temp.get();
    }

    @RequestMapping(value = "/dingeshifangbyid", method = RequestMethod.PUT)
    public MingwaDingeShifang updateDingeShifangById(MingwaDingeShifang mingwaDingeShifang, Long id){
        mingwaDingeShifang.setId(id);
        return mingwaDingeShifangRepository.save(mingwaDingeShifang);
        //return temp.get();
    }

    @RequestMapping(value = "/dingeshifangbyid", method = RequestMethod.DELETE)
    public void deleteDingeShifangById(@RequestParam(value = "id", defaultValue = "64106410") Long id){
        mingwaDingeShifangRepository.deleteById(id);
        //return temp.get();
    }

    @RequestMapping("/dingetufangall")
    public List findDingeTufangAll(){
        return mingwaDingeTufangRepository.findAll();
    }

    @RequestMapping(value = "/dingetufangbyid",method = RequestMethod.GET)
    public Optional findDingeTufangById(Long id){
        Optional<MingwaDingeTufang> temp=  mingwaDingeTufangRepository.findById(id);
        //MingwaDingeTufang temp=  mingwaDingeTufangRepository.findById(id);
        return  temp;
        //return temp.get();
    }

    @RequestMapping(value = "/dingetufangbyid", method = RequestMethod.POST)
    public MingwaDingeTufang saveDingeTufangById(MingwaDingeTufang mingwaDingeTufang, Long id){
        mingwaDingeTufang.setId(id);
        return mingwaDingeTufangRepository.save(mingwaDingeTufang);
        //return temp.get();
    }

    @RequestMapping(value = "/dingetufangbyid", method = RequestMethod.PUT)
    public MingwaDingeTufang updateDingeTufangById(MingwaDingeTufang mingwaDingeTufang, Long id){
        mingwaDingeTufang.setId(id);
        return mingwaDingeTufangRepository.save(mingwaDingeTufang);
        //return temp.get();
    }

    @RequestMapping(value = "/dingetufangbyid", method = RequestMethod.DELETE)
    public void deleteDingeTufangById(@RequestParam(value = "id", defaultValue = "64106410") Long id){
        mingwaDingeTufangRepository.deleteById(id);
        //return temp.get();
    }



    @RequestMapping("dingezhuangyun")
    public List findDingeZhuangyun(){
        return mingwaDingeZhuangyunRepository.findAll();
    }
}
