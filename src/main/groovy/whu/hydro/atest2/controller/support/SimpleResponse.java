package whu.hydro.atest2.controller.support;

/**
 * @ClassName SimpleResponse
 * @Description TODO
 * @Author 86187
 * @Date 2018/12/12 17:37
 * @Version 1.0
 */
public class SimpleResponse {

//    '{ "code": 0,"msg":"注册成功","data":"username"}'

    private Object data;

    private String msg;

    private Integer code;

    public SimpleResponse(Object data, String msg, Integer code) {
        this.data = data;
        this.msg = msg;
        this.code = code;
    }

    public SimpleResponse() {
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }
}
