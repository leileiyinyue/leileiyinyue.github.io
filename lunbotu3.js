
			//获取视频对象
			var vid = document.getElementById("vd");
            var vplay = document.getElementById("btn")
            vplay.onclick = function(){
            	vid.play()
            }
			//       音频循环播放列表
			var vlist = ["Mp3/一曲红尘.mp3", "Mp3/缘分惹得祸.mp3", "Mp3/回忆里的那个人.mp3", "Mp3/伤了心的女人怎么了.mp3", "Mp3/伤感男人的心谁懂.mp3", "Mp3/迷茫的爱.mp3", "Mp3/你到底在哪里.mp3", "Mp3/又是细雨.mp3", "Mp3/心上人.mp3", "Mp3/晚风.mp3", "Mp3/今夜雨蒙蒙.mp3", "Mp3/骑上骏马回草原.mp3","Mp3/火火的姑娘.mp3","Mp3/醉后的心碎.mp3","Mp3/好了伤疤忘了疼.mp3","Mp3/敖包相恋.mp3" ];
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