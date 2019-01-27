package whu.hydro.atest2.controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseBody
import whu.hydro.atest2.entity.User
import whu.hydro.atest2.repository.UserRepository

import javax.servlet.http.HttpServletRequest

/**
 * Created by GuoJiong
 * Date 2018/9/10
 * Description:
 */
class IndexController {
    @Autowired
    UserRepository userRepository

    @ResponseBody
    @RequestMapping("/personal_center")
    void login(HttpServletRequest request){
        println("登陆成功")
    }

    @ResponseBody
    @RequestMapping("/registry")
    void registry(User user){
        userRepository.save(new User(user.getUsername(), passwordEncoder.encode(user.getPassword())));
        //userRepository.save(new User(user.getUsername(), user.getPassword()))
    }


}
