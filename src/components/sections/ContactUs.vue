<template>
<div>
    <h3 class="section-title mt-12">Contact Us</h3>
</div>
  <!-- Contact Section Begin -->
    <section class="contact-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="contact-title">
                        <h4>Contacts Us</h4>
                        <p>Contrary to popular belief, Lorem Ipsum is simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, maki years old.</p>
                    </div>
                    <div class="contact-widget">
                        <div class="cw-item">
                            <div class="ci-icon">
                                <i class="ti-location-pin"></i>
                            </div>
                            <div class="ci-text">
                                <span>Address:</span>
                                <p>60-49 Road 11378 New York</p>
                            </div>
                        </div>
                        <div class="cw-item">
                            <div class="ci-icon">
                                <i class="ti-mobile"></i>
                            </div>
                            <div class="ci-text">
                                <span>Phone:</span>
                                <p>+65 11.188.888</p>
                            </div>
                        </div>
                        <div class="cw-item">
                            <div class="ci-icon">
                                <i class="ti-email"></i>
                            </div>
                            <div class="ci-text">
                                <span>Email:</span>
                                <p>hellocolorlib@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 offset-lg-1">
                    <div class="contact-form">
                        <div class="leave-comment">
                            <h4>Leave A Comment</h4>
                            <p>Our staff will call back later and answer your questions.</p>
                            <form action="#" class="comment-form">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <input type="text" placeholder="Your name">
                                    </div>
                                    <div class="col-lg-6">
                                        <input type="text" placeholder="Your email">
                                    </div>
                                    <div class="col-lg-12">
                                        <textarea placeholder="Your message"></textarea>
                                        <!-- <button type="submit" class="site-btn">Send message</button> -->
										<v-btn variant="outlined">Send message</v-btn>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Contact Section End -->

    <!-- Partner Logo Section Begin -->
    <div class="partner-logo">
        <div class="container">
            <div class="logo-carousel owl-carousel">
                <div class="logo-item">
                    <div class="tablecell-inner">
                        <img src="img/logo-carousel/logo-1.png" alt="">
                    </div>
                </div>
                <div class="logo-item">
                    <div class="tablecell-inner">
                        <img src="img/logo-carousel/logo-2.png" alt="">
                    </div>
                </div>
                <div class="logo-item">
                    <div class="tablecell-inner">
                        <img src="img/logo-carousel/logo-3.png" alt="">
                    </div>
                </div>
                <div class="logo-item">
                    <div class="tablecell-inner">
                        <img src="img/logo-carousel/logo-4.png" alt="">
                    </div>
                </div>
                <div class="logo-item">
                    <div class="tablecell-inner">
                        <img src="img/logo-carousel/logo-5.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Partner Logo Section End -->
</template>

<script setup>

</script>

<style scoped>
 
/*Contact Section*/
.contact-section {
	padding-top: 75px;
	padding-bottom: 80px;
}

.contact-title {
	margin-bottom: 30px;
}

.contact-title h4 {
	color: #252525;
	font-weight: 700;
	margin-bottom: 16px;
}

.contact-widget .cw-item {
	background: #ffffff;
	margin-bottom: 11px;
	-webkit-box-shadow: 0px 8px 35px 10px #E8E8E8;
	box-shadow: 0px 8px 35px 10px #E8E8E8;
	padding-left: 25px;
	padding-top: 15px;
	padding-bottom: 15px;
	border-radius: 10px;
}

.contact-widget .cw-item .ci-icon {
	float: left;
	margin-top: 12px;
}

.contact-widget .cw-item .ci-icon i {
	font-size: 30px;
	color: #b2b2b2;
}

.contact-widget .cw-item .ci-text {
	display: table;
	padding-left: 30px;
}

.contact-widget .cw-item .ci-text span {
	color: #b2b2b2;
	font-size: 16px;
}

.contact-widget .cw-item .ci-text p {
	font-size: 18px;
	color: #252525;
	margin-bottom: 0;
}

.contact-form .leave-comment h4 {
	color: #292f3b;
	font-weight: 700;
	margin-bottom: 20px;
}

.contact-form .leave-comment p {
	margin-bottom: 38px;
}

.contact-form .leave-comment .comment-form input {
	width: 100%;
	font-size: 16px;
	color: #636363;
	height: 50px;
	border: 1px solid #ebebeb;
	border-radius: 5px;
	padding-left: 20px;
	margin-bottom: 30px;
}

.contact-form .leave-comment .comment-form textarea {
	width: 100%;
	resize: none;
	font-size: 16px;
	color: #636363;
	height: 150px;
	border: 1px solid #ebebeb;
	border-radius: 5px;
	padding-left: 20px;
	padding-top: 10px;
	margin-bottom: 35px;
}

.contact-form .leave-comment .comment-form .site-btn {
	padding: 13px 35px 11px;
}

/*---------------------
  Faq Section
-----------------------*/

.faq-section {
	padding-top: 80px;
	padding-bottom: 54px;
}

.faq-accordin .card {
	border: none;
	margin-bottom: 22px;
}

.faq-accordin .card .card-heading {
	font-size: 22px;
	color: #252525;
	font-weight: 700;
	cursor: pointer;
}

.faq-accordin .card .card-heading a {
	padding-left: 42px;
	display: block;
}

.faq-accordin .card .card-body {
	padding: 0;
	padding-top: 13px;
	padding-bottom: 10px;
}

.faq-accordin .card .card-body p {
	margin-bottom: 0;
}

.faq-accordin .card-heading a:after,
.faq-accordin .card-heading>a.active[aria-expanded=false]:after {
	content: "";
	font-family: "FontAwesome";
	font-size: 14px;
	color: #404040;
	height: 25px;
	width: 25px;
	text-align: center;
	line-height: 25px;
	background: #EFEFF0;
	margin-top: 3px;
	position: absolute;
	left: 0;
	top: 0;
}

.faq-accordin .card-heading a[aria-expanded=true]:after,
.faq-accordin .card-heading>a.active:after {
	content: "";
	font-family: "FontAwesome";
	float: left;
	font-size: 13px;
	color: #ffffff;
	background: #e7ab3c;
}

/*---------------------
  Register Form
-----------------------*/

.register-login-section {
	padding-top: 72px;
	padding-bottom: 80px;
}

.register-form h2,
.login-form h2 {
	color: #252525;
	font-weight: 700;
	text-align: center;
	margin-bottom: 35px;
}

.register-form form .group-input,
.login-form form .group-input {
	margin-bottom: 25px;
}

.register-form form .group-input label,
.login-form form .group-input label {
	display: block;
	font-size: 18px;
	color: #252525;
	margin-bottom: 13px;
}

.register-form form .group-input input,
.login-form form .group-input input {
	border: 1px solid #ebebeb;
	height: 50px;
	width: 100%;
	padding-left: 20px;
	padding-right: 15px;
}

.register-form form .register-btn,
.register-form form .login-btn,
.login-form form .register-btn,
.login-form form .login-btn {
	width: 100%;
	letter-spacing: 2px;
	margin-top: 5px;
}

.register-form .switch-login,
.login-form .switch-login {
	text-align: center;
	margin-top: 22px;
}

.register-form .switch-login .or-login,
.login-form .switch-login .or-login {
	color: #252525;
	font-size: 14px;
	letter-spacing: 2px;
	text-transform: uppercase;
	position: relative;
}

.register-form .switch-login .or-login:before,
.login-form .switch-login .or-login:before {
	position: absolute;
	left: 0;
	bottom: 0;
	height: 2px;
	width: 100%;
	background: #9f9f9f;
	content: "";
}

.login-form .group-input.gi-check {
	margin-bottom: 8px;
}

.login-form .group-input .gi-more {
	overflow: hidden;
}

.login-form .group-input .gi-more label {
	position: relative;
	cursor: pointer;
	padding-left: 28px;
	font-size: 14px;
	color: #6B6B6B;
	float: left;
}

.login-form .group-input .gi-more label input {
	position: absolute;
	visibility: hidden;
}

.login-form .group-input .gi-more label input:checked~span {
	border-color: #6C6C6C;
}

.login-form .group-input .gi-more label input:checked~span:after {
	border-color: #6c6c6c;
}

.login-form .group-input .gi-more label .checkmark {
	position: absolute;
	left: 0;
	top: 4px;
	height: 13px;
	width: 13px;
	border: 1px solid #6C6C6C;
	border-radius: 2px;
}

.login-form .group-input .gi-more label .checkmark:after {
	left: 2px;
	top: -2px;
	width: 13px;
	height: 6px;
	border: solid #ffffff;
	border-width: 2px 2px 0px 0px;
	-webkit-transform: rotate(127deg);
	-ms-transform: rotate(127deg);
	transform: rotate(127deg);
}

.login-form .group-input .gi-more .forget-pass {
	float: right;
	line-height: 20px;
	margin-top: -2px;
	font-size: 14px;
	color: #6B6B6B;
}

</style>