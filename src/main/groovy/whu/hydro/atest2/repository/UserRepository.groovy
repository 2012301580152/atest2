package whu.hydro.atest2.repository

import org.springframework.data.jpa.repository.JpaRepository

import whu.hydro.atest2.entity.User

/**
 * Created by GuoJiong
 * Date 2018/9/10
 * Description:
 */
interface UserRepository  extends JpaRepository<User, Long> {
    User findByUsername(String username)
}