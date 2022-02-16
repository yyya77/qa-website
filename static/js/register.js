function bindCaptchaBtn() {
    $("#captcha-btn").on("click", function (event) {
        var $this = $(this);
        var email = $("input[name='email']").val();
        if (!email) {
            alert("请先输入邮箱！");
            return;
        }

        $.ajax({
            url: "/user/captcha",
            method: "POST",
            data: {
                "email": email
            },
            success: function (res) {
                var code = res['code'];
                if (code == 200) {
                    $this.off("click");
                    var countdown = 60;
                    var timer = setInterval(function () {
                        countdown -= 1;
                        if (countdown > 0) {
                            $this.text(countdown + "秒后重新发送");
                        } else {
                            $this.text("获取验证码");
                            bindCaptchaBtn();     //重新激活点击事件
                            clearInterval(timer); //清除定时器
                        }
                    }, 1000);
                    alert("验证码发送成功！");
                } else {
                    alert(res['message']);
                }
            }
        })
    });
}

$(function () {
    bindCaptchaBtn();
});