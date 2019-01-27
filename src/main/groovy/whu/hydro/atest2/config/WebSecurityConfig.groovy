//package whu.hydro.atest2.config
//
//import org.springframework.context.annotation.Bean
//import org.springframework.context.annotation.Configuration
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
//import org.springframework.security.config.annotation.web.builders.HttpSecurity
//import org.springframework.security.config.annotation.web.builders.WebSecurity
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
//import org.springframework.security.core.userdetails.UserDetailsService
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
//import org.springframework.security.crypto.password.DelegatingPasswordEncoder
//
//import org.springframework.security.crypto.password.PasswordEncoder
//import org.springframework.security.crypto.password.Pbkdf2PasswordEncoder
//
//import org.springframework.security.crypto.scrypt.SCryptPasswordEncoder
//import whu.hydro.atest2.service.impl.UserDetailsServiceImpl
//
///**
// * Created by GuoJiong
// * Date 2018/9/10
// * Description:
// */
//@Configuration
//@EnableWebSecurity
//public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
//
//
//    String loginPage = "/userLogin";
//    String failureUrl = "/userLogin?error=T";
//    String successUrl = "/userLogin?error=F";
//    String applyCheckCode = "/applyCheckCode";
//
//    @Bean
//    UserDetailsService detailsService() {
//        return new UserDetailsServiceImpl();
//    }
//
//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//        //auth.userDetailsService(detailsService());
//        auth.userDetailsService(detailsService()).passwordEncoder(passwordEncoder());
//    }
//
//    @Override
//    public void configure(WebSecurity web) {
//        web.ignoring().antMatchers("/config/**", "/css/**", "/fonts/**", "/img/**", "/js/**");
//    }
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http.headers()
//                .and().authorizeRequests()
//                .antMatchers("/registry").permitAll()
//                .anyRequest().authenticated()
//                .and().formLogin().loginPage("/sign_in")
//                .loginProcessingUrl("/login").defaultSuccessUrl("/personal_center",true)
//                .failureUrl("/sign_in?error").permitAll()
//                .and().sessionManagement().invalidSessionUrl("/sign_in")
//                .and().rememberMe().tokenValiditySeconds(1209600)
//                .and().logout().logoutSuccessUrl("/sign_in").permitAll()
//                .and().csrf().disable();
//    }
//
//    @Bean
//    public PasswordEncoder passwordEncoder() {
//
////        String idForEncode = "bcrypt";
////        Map encoders = new HashMap<>();
////        encoders.put(idForEncode, new BCryptPasswordEncoder());
////        encoders.put("noop", NoOpPasswordEncoder.getInstance());
////        encoders.put("pbkdf2", new Pbkdf2PasswordEncoder());
////        encoders.put("scrypt", new SCryptPasswordEncoder());
////        encoders.put("sha256", new StandardPasswordEncoder());
////
////        PasswordEncoder passwordEncoder =
////                new DelegatingPasswordEncoder(idForEncode, encoders);
//
//        // return PasswordEncoderFactories.createDelegatingPasswordEncoder();
//        return new BCryptPasswordEncoder();
//    }
//}