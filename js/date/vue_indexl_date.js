function _request_nav1(){
	return nav1;
}
function _request_recommond(){
	return recommond;
}

var _vm1 = new Vue({
	el:".navLL",
	data:{
		nav1_list:_request_nav1()
	}
});
var _recommond = new Vue({
	el:"#recommond",
	data:{
		recommond_list:_request_recommond()
	}
});
