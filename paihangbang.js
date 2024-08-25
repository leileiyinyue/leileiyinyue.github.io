
			//获取视频对象
			var vid = document.getElementById("vd");
            var vplay = document.getElementById("btn")
            vplay.onclick = function(){
            	vid.play()
            }
			//       音频循环播放列表
			var vlist = ["Mp3/百花香.mp3", "Mp3/鬼迷心窍.mp3", "Mp3/花开的时候你就来看我.mp3", "Mp3/快乐崇拜.mp3", "Mp3/来生缘.mp3", "Mp3/凉凉.mp3", "Mp3/你莫走.mp3", "Mp3/女儿情.mp3", "Mp3/踏山河.mp3", "Mp3/谢谢你的爱.mp3", "Mp3/新贵妃醉酒.mp3", "Mp3/夜之光.mp3","Mp3/一曲相思.mp3","Mp3/雨花石.mp3" ];
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