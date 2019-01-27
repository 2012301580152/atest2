package whu.hydro.atest2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import whu.hydro.atest2.entity.GuanjiangDingeGujie;
import whu.hydro.atest2.repository.*;

import java.util.List;

/**
 * Created by GuoJiong
 * Date 2018/9/7
 * Description:
 */
@RestController
@RequestMapping("/guanjiang")
public class GuanjiangController {

    @Autowired
    private GuanjiangDingeGujieRepository guanjiangDingeGujieRepository;

    @Autowired
    private GuanjiangDingeWeimuRepository guanjiangDingeWeimuRepository;

    @Autowired
    private GuanjiangDingeHuitianRepository guanjiangDingeHuitianRepository;

    @Autowired
    private GuanjiangPensheRepository guanjiangPensheRepository;

    @Autowired
    private ZhuankongDingeGujieRepository zhuankongDingeGujieRepository;

    @Autowired
    private ZhuankongDingeWeimuRepository zhuankongDingeWeimuRepository;


    @RequestMapping("/dingegujieall")
    public List findDingeGujieAll(){
        return guanjiangDingeGujieRepository.findAll();
    }

    @RequestMapping("/dingeweimuall")
    public List findDingeWeimuAll(){
        return guanjiangDingeWeimuRepository.findAll();
    }

    @RequestMapping("/dingehuitianall")
    public List findDingeHuitianAll(){
        return guanjiangDingeHuitianRepository.findAll();
    }


    @RequestMapping("/pensheall")
    public List findPensheAll(){
        return guanjiangPensheRepository.findAll();
    }



    @RequestMapping("/zdingegujieall")
    public List findZDingeGujieAll(){
        return zhuankongDingeGujieRepository.findAll();
    }

    @RequestMapping("/zdingeweimuall")
    public List findZDingeWeimuAll(){
        return zhuankongDingeWeimuRepository.findAll();
    }




}
