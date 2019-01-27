package whu.hydro.atest2.common

import java.lang.reflect.Field

/**
 * Created by GuoJiong
 * Date 2018/9/12
 * Description:
 */
class ListGroupBy {
    Map testListGroupBy(List list, String[] grouplist){

        //list.groupBy {it}


        Map map = new HashMap()

        Field[] fields = list.get(0).getClass().getDeclaredFields();

        for (Field field : fields)
        {
            // 对于每个属性，获取属性名
            String varName = field.getName();
        }

        for(int i = 0; i < list.size(); i++){
            for(def group in grouplist){
                //if
            }
        }




        return map
    }
}
