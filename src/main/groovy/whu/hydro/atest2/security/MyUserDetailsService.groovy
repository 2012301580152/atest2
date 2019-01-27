package whu.hydro.atest2.security

import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.authority.AuthorityUtils
import org.springframework.security.core.userdetails.User
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Component

import whu.hydro.atest2.repository.UserRepository

import java.util.logging.Logger


/**
 * @ClassName MyUserDetailsService* @Description TODO* @Author 86187* @Date 2018/12/11 20:00
 * @Version 1.0
 */
@Component
class MyUserDetailsService implements UserDetailsService {

//    private Logger logger = LoggerFactory.getLogger(getClass())

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;
    @Override
    UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        logger.info("登陆用户名：" + username)

        def user = userRepository.findByUsername(username)
        return new User(username, user.password,
                true, true, true, true,
                AuthorityUtils.commaSeparatedStringToAuthorityList("admin"))
    }
}
