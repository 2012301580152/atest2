//package whu.hydro.atest2.service.impl
//
//import org.springframework.beans.factory.annotation.Autowired
//import org.springframework.security.core.authority.SimpleGrantedAuthority
//import org.springframework.security.core.userdetails.UserDetails
//import org.springframework.security.core.userdetails.UserDetailsService
//import org.springframework.security.core.userdetails.UsernameNotFoundException
//import org.springframework.stereotype.Service
//import whu.hydro.atest2.entity.Role
//import whu.hydro.atest2.entity.User
//import whu.hydro.atest2.repository.UserRepository
//
///**
// * Created by GuoJiong
// * Date 2018/9/10
// * Description:
// */
//@Service
//class UserDetailsServiceImpl implements UserDetailsService{
//    @Autowired
//    UserRepository userRepository
//
//    @Override
//    UserDetails loadUserByUsername(String s)throws UsernameNotFoundException{
//        User user = userRepository.findByUsername(s)
//        List<SimpleGrantedAuthority> authorities = new ArrayList<>()
//
//        for(Role role:user.getRoles()){
//            authorities.add(new SimpleGrantedAuthority(role.getName()))
//        }
//        return new User(user.getUsername(), user.getPassword(), authorities)
//    }
//}
