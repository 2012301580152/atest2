/**
 * 
 */
	function layuiConfig() {
		layui.use([ 'form', 'layedit', 'laydate', 'element' ], function() {
			var form = layui.form,
				layer = layui.layer,
				layedit = layui.layedit,
				element = layui.element,
				laydate = layui.laydate;
			//日期
			laydate.render({
				elem : '#date'
			});
			laydate.render({
				elem : '#date'
			});
		});
	}
	function tableTest(tableData){
		layui.use('table', function(){
		  var table = layui.table;  
		  table.render({
		    elem: '#tufangmingwaTable'
		    ,title:'这是第一个表格'
		    ,cellMinWidth: 80 //全局定义常规单元格的最	宽度
		    ,cols: [[
		      {field:'tushifenlei', title: '土石分类',sort: true,align:'center'}
		      ,{field:'gongchengliang', title: '工程量',sort: true,align:'center'}
		      ,{field:'shigongchengxu',  title: '施工程序', sort: true,align:'center'}
		      ,{field:'shigongfangfa', title: '施工方法', sort: true,align:'center'}
		      ,{field:'wajueji',  title: '挖掘机械', sort: true,align:'center'}
		      ,{field:'zhuangzaiji',  title: '装载机械', sort: true,align:'center'}
		      ,{field:'yunshuchexing',  title: '自卸汽车型号', sort: true,align:'center'}
		      ,{field:'yunshujuli',  title: '运输距离', sort: true,align:'center'}
		    ]]
		    ,page: true //开启分页
		     ,data:tableData
		  });
		});
	}