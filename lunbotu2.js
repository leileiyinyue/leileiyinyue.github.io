
			//获取视频对象
			var vid = document.getElementById("vd");
            var vplay = document.getElementById("btn")
            vplay.onclick = function(){
            	vid.play()
            }
			//       音频循环播放列表
			var vlist = ["Mp3/爱就一个字.mp3", "Mp3/白月光.mp3", "Mp3/别怕我伤心.mp3", "Mp3/当我孤独时还可以抱你.mp3", "Mp3/难以抗拒你容颜.mp3", "Mp3/披着羊皮的狼.mp3", "Mp3/有一点动心.mp3", "Mp3/真的爱你 .mp3", "Mp3/我可以抱你吗.mp3", "Mp3/伤心酒杯.mp3", "Mp3/碎心石.mp3", "Mp3/梦醉荷塘.mp3","Mp3/我是否也在你心中.mp3","Mp3/一生无悔.mp3","Mp3/今夜雨蒙蒙.mp3","Mp3/下辈子不做女人.mp3" ];
				var k = 0;
			
			//点击切换到下一个资源
			document.getElementById("btn2").onclick = function() {
				k++;
				if(k == vlist.length) {
					k = 0;
				}
				vid.src = vlist[k];
				vid.play();

			}

			//点击切换到上一个资源
			document.getElementById("btn1").onclick = function() {
				k--;
				if(k < 0) {
					k = vlist.length - 1;
				}
				vid.src = vlist[k];
				vid.play();

			}
			var k = 0; //初始播放视频索引
			vid.onended = function() {
				k++;
				if(k == vlist.length) {
					k = 0;
				}
				vid.src = vlist[k];
				vid.play();
			}