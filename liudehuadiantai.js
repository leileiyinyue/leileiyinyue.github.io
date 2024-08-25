			//获取视频对象
			var vid = document.getElementById("vd");
            var vplay = document.getElementById("btn")
            vplay.onclick = function(){
            	vid.play()
            }
			//       音频循环播放列表
			var vlist = ["Mp3/暗里着迷.mp3", "Mp3/不死的梦.mp3", "Mp3/风雨依然.mp3", "Mp3/记不住你的容颜.mp3", "Mp3/可不可以.mp3", "Mp3/来生缘.mp3", "Mp3/浪子心声.mp3", "Mp3/练习.mp3", "Mp3/你说他是你想嫁的人.mp3", "Mp3/亲爱的小孩.mp3", "Mp3/如果你是我的传说.mp3", "Mp3/谢谢你的爱.mp3","Mp3/一起走过的日子.mp3", "Mp3/缘尽.mp3", "Mp3/在我的胸前安歇.mp3" ];
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