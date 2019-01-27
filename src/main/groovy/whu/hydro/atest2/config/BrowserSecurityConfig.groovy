//package whu.hydro.atest2.config
//
//import org.springframework.context.annotation.Configuration
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
//import org.springframework.security.config.annotation.web.builders.HttpSecurity
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
//
//
//
//
///**
// * @ClassName BrowserSecurityConfig* @Description TODO* @Author 86187* @Date 2018/12/11 19:34
// * @Version 1.0
// */
//@Configuration
//class BrowserSecurityConfig extends WebSecurityConfigurerAdapter {
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http
//                .authorizeRequests()
//                .anyRequest().authenticated()
//                .and()
//                .oauth2Login()
//    }
//}
