// 验证表单信息
function validateCustomer(){
	var mobile = $("#mobile").val();
	if (!/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i.test(mobile)) {
        layer.tips('请填写合法手机号', '#mobile');
        $("#mobile").focus();
        return false;
    }
	else{
		return true;
	}
}

function validateAdmin(){
	var mobile = $("#mobile").val();
	var password = $("#password").val();
	if (!/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i.test(mobile)) {
        layer.tips('请填写合法手机号', '#mobile');
        $("#mobile").focus();
        return false;
    }
	else if(password.length<6||password.length>21){
		layer.tips('密码长度在6-21位', '#password');
        $("#password").focus();
        return false;
	}
	else{
		return true;
	}
}
