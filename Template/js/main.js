$(document).ready(function() {
			//initial the type picture's pagination
			$('.type-pagination').find('#1').addClass('showing-page');
			$('.type-1').addClass('showing');

			var mls = $('body').attr('id');
			var openDayUri = 'http://www.yujiahao.cn/sp/get/openhouse/';
			var housePic = 'http://www.yujiahao.cn/sp/get/imgs/';
			var contact = 'http://www.yujiahao.cn/sp/call/agent/';

			//公众开放日
			$.ajax({
				type: 'GET',
				url: openDayUri,
				dataType: 'json/application',
				data: {
					'mls': mls
				},
				success: function(res) {
					var opendays = res.data;
					for(var i in opendays) {
						$('.add-on-' + i).text(opendays[i].opendate);
						$('.add-time-' + i).text(opendays[i].opentime);
					}
				},
				error: function(err) {
					console.error('get info failed')
				}
			});

			//房源图片
			$.ajax({
				type: 'GET',
				url: housePic,
				dataType: 'json/application',
				data: {
					'mls': mls
				},
				success: function(res) {
					var assetpic = res.data;
					for(var i in assetpic) {
						$('.list-group-pic').find('#house-pic-' + i).attr('src', assetpic[i].img);
						$('.list-group-pic').find('#house-pic-' + i).attr('data-info', assetpic[i].desc);
					}
				},
				error: function(err) {
					console.error('get info failed')
				}
			})

			//联系经纪人
			$.ajax({
				type: 'POST',
				url: contact,
				dataType: 'json/application',
				data: {
					'mls': mls,
					'agentid': agentid,
					'name': name,
					'tel': tel,
					'email': email,
					'desc': desc
				},
				success: function(res) {

				},
				error: function(err) {
					console.error('get info failed')
				}
			})

			// show Pic information
			var presentPic;

			function showPicInfo(target) {
				presentPic = $(target).attr('id');
				var imgsrc = $(target).attr('src');
				var imgdesc = $(target).attr('data-info');
				$('#modal-img').attr('src', imgsrc);
				$('#modal-desc').text(imgdesc);
			}

			function toLeftPic() {
				var presrc = $('#' + presentPic).parent('.target').prev().find('img').attr('src');
				var predesc = $('#' + presentPic).parent('.target').prev().find('img').attr('data-info');
				$('#modal-img').attr('src', presrc);
				$('#modal-desc').text(predesc);
				presentPic = $('#' + presentPic).parent('.target').prev().find('img').attr('id');

			}

			function toRightPic() {
				var presrc = $('#' + presentPic).parent('.target').next().find('img').attr('src');
				var predesc = $('#' + presentPic).parent('.target').next().find('img').attr('data-info');
				$('#modal-img').attr('src', presrc);
				$('#modal-desc').text(predesc);
				presentPic = $('#' + presentPic).parent('.target').next().find('img').attr('id');

			}
			//pagination function
			var initnum = 1;

			function changePage(pagenum) {
				var timer = 0;
				console.log(timer);
				var initLeft = $('.showing').offset().left;
				if(pagenum != initnum) {
					var interval = setInterval(function() {
						if(pagenum > initnum || pagenum == 'r')
							$('.showing').css('left', $('.showing').offset().left + 100 + 'px');

						if(pagenum < initnum || pagenum == 'l')
							$('.showing').css('left', $('.showing').position().left - 100 + 'px');

						$('.showing').css('opacity', $('.showing').css('opacity') / 1.5);
						timer++;
						if(timer > 6) {
							$('.showing').css('left', 0);
							$('.showing').css('opacity', 1);
							if(pagenum != 'r' && pagenum != 'l')
								initnum = pagenum;
							clearInterval(interval);
						}
					}, 30);

				}

				switch(pagenum) {
					case 1:
						setTimeout(function() {
							$('.showing').removeClass('showing');
							$('.type-1').addClass('showing');
							$('.showing-page').removeClass('showing-page');
							$('.type-pagination').find('#1').addClass('showing-page');
						}, 250);
						break;
					case 2:
						setTimeout(function() {
							$('.showing').removeClass('showing');
							$('.type-2').addClass('showing');
							$('.showing-page').removeClass('showing-page');
							$('.type-pagination').find('#2').addClass('showing-page');
						}, 250);
						break;
					case 3:
						setTimeout(function() {
							$('.showing').removeClass('showing');
							$('.type-3').addClass('showing');
							$('.showing-page').removeClass('showing-page');
							$('.type-pagination').find('#3').addClass('showing-page');
						}, 250);
						break;
					case 'l':
						if(initnum != 1) {
							setTimeout(function() {
								$('.showing').removeClass('showing');
								initnum--;
								var type = initnum;
								$('.type-' + type).addClass('showing');
								$('.showing-page').removeClass('showing-page');
								$('.type-pagination').find('#' + type).addClass('showing-page');
							}, 250);
						}
						break;
					case 'r':
						if(initnum != 3) {
							setTimeout(function() {
								$('.showing').removeClass('showing');
								initnum++;
								var type = initnum;
								$('.type-' + type).addClass('showing');
								$('.showing-page').removeClass('showing-page');
								$('.type-pagination').find('#' + type).addClass('showing-page');
							}, 250);
						}

						break;
					default:
				}
			}