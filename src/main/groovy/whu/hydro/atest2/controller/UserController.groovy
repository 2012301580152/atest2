package whu.hydro.atest2.controller


import org.springframework.http.HttpStatus
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.web.DefaultRedirectStrategy
import org.springframework.security.web.RedirectStrategy
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.web.savedrequest.HttpSessionRequestCache
import org.springframework.security.web.savedrequest.RequestCache
import org.springframework.security.web.savedrequest.SavedRequest
import org.springframework.util.StringUtils
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestController
import whu.hydro.atest2.controller.support.SimpleResponse
import whu.hydro.atest2.entity.User
import whu.hydro.atest2.repository.UserRepository

import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse


/**
 * @ClassName UserController* @Description TODO* @Author 86187* @Date 2018/12/12 14:04
 * @Version 1.0
 */

@RestController
@RequestMapping("/user")
class UserController {

    @Autowired
    private UserRepository userRepository

//    @Autowired
    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();


    private RequestCache requestCache = new HttpSessionRequestCache()

    private RedirectStrategy redirectStrategy = new DefaultRedirectStrategy()

    @RequestMapping("/login")
    @ResponseStatus(code = HttpStatus.UNAUTHORIZED)
    public SimpleResponse requireAuthentication(HttpServletRequest request, HttpServletResponse response) {

        SavedRequest savedRequest = requestCache.getRequest(request, response)
        if(savedRequest != null){
            String targetUrl = savedRequest.getRequestURI();
            if(StringUtils.endsWithIgnoreCase(targetUrl, ".html")){
                redirectStrategy.sendRedirect(request, response, "/dist/views/user/login.html");
            }
        }
        return new SimpleResponse("test", "引导用户到登陆页面", 1001)
    }

    @PostMapping("/reg")
    String reg(@RequestParam(name = "nickname") String username,
               @RequestParam String password){
        User user = userRepository.findByUsername(username)
        if(user != null) {
            return '{ "code": 0,"msg":"用户名已存在","data":null }'
        }else {
            user = new User(username, passwordEncoder.encode(password))
            userRepository.save(user)
            return '{ "code": 0,"msg":"注册成功","data":"username"}'
        }
    }

    @RequestMapping("/get_all_users")
    List getAllEnableUsers(){
        def users = userRepository.findAll()
        users.removeAll{it.enabled==false}
        return users
    }
}
