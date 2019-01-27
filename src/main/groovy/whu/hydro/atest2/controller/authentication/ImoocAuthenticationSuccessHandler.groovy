package whu.hydro.atest2.controller.authentication

import com.fasterxml.jackson.databind.ObjectMapper

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.Authentication
import org.springframework.security.web.authentication.AuthenticationSuccessHandler
import org.springframework.stereotype.Component

import javax.servlet.ServletException
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse


/**
 * @ClassName ImoocAuthticationSuccessHandler* @Description TODO* @Author 86187* @Date 2018/12/12 19:55
 * @Version 1.0
 */
@Component("imoocAuthenticationSuccessHandler")
class ImoocAuthenticationSuccessHandler implements AuthenticationSuccessHandler {


    @Autowired
    private ObjectMapper objectMapper;
    @Override
    void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {

        response.setContentType("application/json;charset=UTF-8")
        response.getWriter().write(objectMapper.writeValueAsString(authentication))
    }
}
