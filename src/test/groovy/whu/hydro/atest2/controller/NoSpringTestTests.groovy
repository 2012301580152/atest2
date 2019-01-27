package whu.hydro.atest2.controller

import com.google.gson.Gson
import org.junit.Test


/**
 * @ClassName NoSpringTestTests* @Description TODO* @Author 86187* @Date 2018/12/11 12:07
 * @Version 1.0
 */
class NoSpringTestTests {

    @Test
    void test() {
        def map = ["id":10078,"equip":"塔式起重机","type":"6t","unitE":0.0,"unitO":21.1]

        Gson gson = new Gson();
        String jsonStr = gson.toJson(map);
        println(jsonStr)


//        map.toString()

        println(map.toMapString())



//        def address = ["address_id":"1","name":"yuyu"]
//        println(address.toString())
//        println(address.toMapString())
//        def str = JsonOutput.toJson(address)
//        println(str)
//        println(JsonOutput.prettyPrint(str))
//        def address2 = slurper.parseText(str)
//        println(address2)

    }
}
