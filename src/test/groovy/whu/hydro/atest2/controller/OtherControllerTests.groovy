package whu.hydro.atest2.controller

import com.google.gson.Gson
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.MediaType
import org.springframework.test.context.junit4.SpringRunner
import org.springframework.test.web.servlet.MockMvc

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status


/**
 * @ClassName OtherControllerTests
 * @Description TODO
 * @Author 86187
 * @Date 2018/12/10 20:56
 * @Version 1.0
 */

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
class OtherControllerTests {

    @Autowired
    private MockMvc mockMvc;

    private def testModel(String url, Map map, String request="GET") {
        def perform = null;
        if("GET".equalsIgnoreCase(request)){
            perform = get(url)
            map.each {entry -> perform = perform.param(entry.key, entry.value)}
        }else if("POST".equalsIgnoreCase(request)){
            Gson gson = new Gson();
            String jsonStr = gson.toJson(map);
            perform = post(url).content(jsonStr)

        }else if("PUT".equalsIgnoreCase(request)){
            Gson gson = new Gson();
            String jsonStr = gson.toJson(map);
            perform = put(url).content(jsonStr)
        }else {
            println "没有定义对应请求"
        }


        perform = perform.contentType(MediaType.APPLICATION_JSON_UTF8)
                .accept(MediaType.APPLICATION_JSON)
        def result = mockMvc.perform(perform)
                .andExpect(status().isOk())
                .andReturn()
        return result
    }


    @Test
    void test01(){

        def url = "/other/unitenergy"
        def map = ["equip":"塔式起重机","type":"6t"]
        Gson gson = new Gson();
        String jsonStr = gson.toJson(map);
        def result = mockMvc.perform(get("/other/unitenergy")
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content(jsonStr)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn()


        println(result.getResponse().getContentAsString())



//
//        def result = testModel(url, map)
//        println(result.getResponse().getContentAsString())
//
//        def perform = null;
//        if("GET".equalsIgnoreCase(request)){
//            perform = get(url)
//        }else if("POST".equalsIgnoreCase(request)){
//            perform = post(url)
//        }else if("PUT".equalsIgnoreCase(request)){
//            perform = put(url)
//        }else {
//            println "没有定义对应请求"
//        }
//
//        map.each {entry -> perform = perform.param(entry.key, entry.value)}
//        perform = perform.contentType(MediaType.APPLICATION_JSON_UTF8)
//        def result = mockMvc.perform(perform)
//                .andExpect(status().isOk())
//                .andReturn()


    }


    @Test
    void findProjectAmountAllTest() {
        def url = "/other/projectamount"
        def result = testModel(url,null)
        println(result.getResponse().getContentAsString())
    }

    @Test
    void findUnitEnergyByEquipAndType() {
        def url = "/other/unitenergy"
        Map map = new HashMap()
        map.put("equip", "塔式起重机")
        map.put("type", "6t")

        def result = testModel(url, map)
        println(result.getResponse().getContentAsString())
    }


    @Test
    void saveUnitEnergy() {

        def url = "/other/unitenergy"
        def request = "POST"
        def map = ["id":10078,"equip":"塔式起重机","type":"6t","unitE":0.0,"unitO":21.1]

        def result = testModel(url, map, request)
        println(result.getResponse().getContentAsString())
    }


    @Test
    void updateOrSaveUnitEnergy() {
        def url = "/other/unitenergy"
        def request = "PUT"
        def map = ["id":10078,"equip":"塔式起重机","type":"6t","unitE":0.0,"unitO":21.1]

        def result = testModel(url, map, request)
        println(result.getResponse().getContentAsString())
    }


    @Test
    void test001(){
//        def map = [a:1,b:2,c:3]


        def map = ["id":10078,"equip":"塔式起重机","type":"6t","unitE":0.0,"unitO":21.1]

        def store = ''
        map.each{entry -> println(entry.value)}

        map.each{entry -> store += entry.key + entry.value}
//        assert store == "a1b2c3"

        println(store)
    }




    @Test
    void putTes(){

        def map = ["id":10078,"equip":"塔起重","type":"62t","unitE":0.0,"unitO":21.1]
        Gson gson = new Gson();
        String jsonStr = gson.toJson(map);
        def result = mockMvc.perform(post("/other/unitenergy")
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content(jsonStr)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn()


        println(result.getResponse().getContentAsString())


    }







}
