//package whu.hydro.atest2.controller
//
//import org.junit.Assert
//import org.junit.Before
//import org.junit.Test
//import org.junit.runner.RunWith
//import org.springframework.beans.factory.annotation.Autowired
//import org.springframework.boot.SpringBootConfiguration
//import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
//import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
//import org.springframework.boot.test.context.SpringBootTest
//import org.springframework.http.MediaType
//import org.springframework.test.context.ContextConfiguration
//import org.springframework.test.context.junit4.SpringRunner
//import org.springframework.test.web.servlet.MockMvc
//import org.springframework.test.web.servlet.MvcResult
//import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
//import org.springframework.test.web.servlet.result.MockMvcResultHandlers
//import org.springframework.test.web.servlet.setup.MockMvcBuilders
//import org.springframework.web.context.WebApplicationContext
//import whu.hydro.atest2.repository.DongwaDingeRepository
//
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
///**
// * Created by GuoJiong
// * Date 2018/9/8
// * Description:
// */
//
//@RunWith(SpringRunner.class)
//@SpringBootTest
//@AutoConfigureMockMvc
//class ControllerTests {
//
//
//    @Autowired
//    private DongwaDingeRepository dongwaDingeRepository;
//
//    @Autowired
//    private MockMvc mockMvc;
//
////    @Before
////    public void setUp() throws Exception{
////        //MockMvcBuilders.webAppContextSetup(WebApplicationContext context)：指定WebApplicationContext，将会从该上下文获取相应的控制器并得到相应的MockMvc；
////        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();//建议使用这种
////    }
//
//
////    @Test
////    public void test0() {
////
////        println dongwaDingeRepository.findAll()
////
//////        println "test"
////    }
//
//
//    /*
//       /cheqi/
//           mingquall
//           suidongall
//
//       /dongwa
//           dingeall
//           zhuangyunall
//
//
//       /guanjiang
//           dingegujieall
//           dingeweimuall
//           dingehuitianall
//           zdingegujieall
//           zdingeweimuall
//
//       /hunnintu/
//           dingechangtaiall
//           dingerccall
//           yunshuchuizhiall
//           yunshushuipinall
//
//       /mingwa
//           dingeshifangall
//           dingetufangall
//           dingezhuangyun
//
//       /other
//           projectamount
//
//    */
//
////    @Test
////    void getUnitEnergyByEquipAndTypeTest() throws Exception{
////        def result = this.mockMvc.perform(get("/other/unitenergy")
////                .param('equip', 'asd')
////                .param('type', 'qws')
////                .contentType(MediaType.APPLICATION_JSON_UTF8))
////                .andExpect(status().isOk())
////                .andReturn()
////
////        result.getResponse().getContentAsString()
////
////        println(result.toString())
////
////        for (int i = 0; i < 100; i++){
////            println(i)
////        }
////        //println(result.toString())
////    }
//
//
////    @Test
////    void setUnitEnergyTest() throws Exception{
////
////        this.mockMvc.perform(MockMvcRequestBuilders.post("/other/unitenergy")
////                .param('equip', 'asd')
////                .param('type', 'qws')
////                .param('unitE', '2')
////                .param('unitO', '3')
////                .contentType(MediaType.APPLICATION_JSON_UTF8))
////                //.andExpect(status().isOk())
////                //.andExpect(jsonPath('$').value(null))
////        //println(result)
////    }
//
////    @Test
////    public void saveUnitEnergyTest()throws Exception{
////        this.mockMvc.perform(MockMvcRequestBuilders.put("/other/unitenergy")
////                .param('equip', 'asd')
////                .param('type', 'qws')
////                .contentType(MediaType.APPLICATION_JSON_UTF8))
////                .andExpect(status().isOk())
////    }
//
////    @Test
////    public void deleteUnitEnergyTest()throws Exception{
////        this.mockMvc.perform(MockMvcRequestBuilders.delete("/other/unitenergy")
////                .param('equip', 'asd')
////                .param('type', 'qws')
////                .param('unitE', '2')
////                .param('unitO', '3')
////                .contentType(MediaType.APPLICATION_JSON_UTF8))
////                .andExpect(status().isOk())
////    }
//
//
//
//
////    @Test
////    public void getHello() throws Exception{
////
////        /**
////         * 1、mockMvc.perform执行一个请求。
////         * 2、MockMvcRequestBuilders.get("XXX")构造一个请求。
////         * 3、ResultActions.param添加请求传值
////         * 4、ResultActions.accept(MediaType.TEXT_HTML_VALUE))设置返回类型
////         * 5、ResultActions.andExpect添加执行完成后的断言。
////         * 6、ResultActions.andDo添加一个结果处理器，表示要对结果做点什么事情
////         *   比如此处使用MockMvcResultHandlers.print()输出整个响应结果信息。
////         * 5、ResultActions.andReturn表示执行完成后返回相应的结果。
////         */
////
////        MvcResult mvcResult= mockMvc.perform(MockMvcRequestBuilders.get("/dongwa/dingeall")
////                .param("name","lvgang")
////                .accept(MediaType.TEXT_HTML_VALUE))
////        // .andExpect(MockMvcResultMatchers.status().isOk())             //等同于Assert.assertEquals(200,status);
////        // .andExpect(MockMvcResultMatchers.content().string("hello lvgang"))    //等同于 Assert.assertEquals("hello lvgang",content);
////                .andDo(MockMvcResultHandlers.print())
////                .andReturn();
////        int status=mvcResult.getResponse().getStatus();                 //得到返回代码
////        String content=mvcResult.getResponse().getContentAsString();    //得到返回结果
////
////        println(status)
////        println(content)
////
////        //Assert.assertEquals(200,status);                        //断言，判断返回代码是否正确
////        //Assert.assertEquals("hello",content);            //断言，判断返回的值是否正确
////    }
////
////
////
////    @Test
////    void test(){
////
////
////
////    }
//}
