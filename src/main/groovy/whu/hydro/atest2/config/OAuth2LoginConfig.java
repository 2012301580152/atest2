package whu.hydro.atest2.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.oauth2.client.CommonOAuth2Provider;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import whu.hydro.atest2.controller.authentication.ImoocAuthenticationFailureHandler;
import whu.hydro.atest2.controller.authentication.ImoocAuthenticationSuccessHandler;

/**
 * @ClassName OAuth2LoginConfig
 * @Description TODO
 * @Author 86187
 * @Date 2018/12/11 19:43
 * @Version 1.0
 */
@Configuration
public class OAuth2LoginConfig {

    @EnableWebSecurity
    public static class OAuth2LoginSecurityConfig extends WebSecurityConfigurerAdapter {

        @Autowired
        private ImoocAuthenticationSuccessHandler imoocAuthenticationSuccessHandler;

        @Autowired
        private ImoocAuthenticationFailureHandler imoocAuthenticationFailureHandler;

        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http.headers().frameOptions().disable();

            http
                .formLogin()
                    .loginPage("/user/login")
//                    .loginPage("/dist/views/user/login.html")
                    .loginProcessingUrl("/user/require")

//                    .successForwardUrl("/dist/views/index.html")
                    .successHandler(imoocAuthenticationSuccessHandler)
                    .and()
                .authorizeRequests()
                    .antMatchers(
                            "/user/login",
                            "/dist/views/user/reg.html",
                            "/dist/views/user/login.html",
                            "/user/require",
                            "/user/reg",
                            "/dist/layuiadmin/**").permitAll()
                    .anyRequest().authenticated()
                    .and()
                .logout()
                    .permitAll()
                    .and()
                .csrf().disable();

//                    .and()
//                    .oauth2Login();
        }

        @Bean
        public PasswordEncoder passwordEncoder(){
            return new BCryptPasswordEncoder();
        }
    }

//    @Bean
//    public ClientRegistrationRepository clientRegistrationRepository() {
//        return new InMemoryClientRegistrationRepository(this.googleClientRegistration());
//    }
//
//    @Bean
//    public OAuth2AuthorizedClientService authorizedClientService(
//            ClientRegistrationRepository clientRegistrationRepository) {
//        return new InMemoryOAuth2AuthorizedClientService(clientRegistrationRepository);
//    }
//
//    @Bean
//    public OAuth2AuthorizedClientRepository authorizedClientRepository(
//            OAuth2AuthorizedClientService authorizedClientService) {
//        return new AuthenticatedPrincipalOAuth2AuthorizedClientRepository(authorizedClientService);
//    }
//
//    private ClientRegistration googleClientRegistration() {
//        return CommonOAuth2Provider.GOOGLE.getBuilder("google")
//                .clientId("google-client-id")
//                .clientSecret("google-client-secret")
//                .build();
//    }

}
